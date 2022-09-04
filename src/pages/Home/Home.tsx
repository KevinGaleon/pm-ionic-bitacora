import React, { useRef } from 'react';
import { add } from 'ionicons/icons';
import { IonContent, IonFab, IonFabButton, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar, IonButtons, IonButton, IonModal, IonItem, IonLabel, IonInput } from '@ionic/react';
import { OverlayEventDetail } from '@ionic/core/components';

import './Home.css';
import { BinnaclesGroup } from '../../common/interfaces/binnaclesGroup';
import { formatLocaleDate } from '../../utils/date';

const Home = () => {
  const modal = useRef<HTMLIonModalElement>(null);
  const inputTitle = useRef<HTMLIonInputElement>(null);
  const inputDate = useRef<HTMLIonInputElement>(null);
  const inputImgUrl = useRef<HTMLIonInputElement>(null);
  const currentDate = formatLocaleDate(`${new Date()}`);

  function confirm() {
    const binnacleGroup: BinnaclesGroup = {
      title: `${inputTitle.current?.value}`,
      date: `${inputDate.current?.value}`,
      imgUrl: `${inputImgUrl.current?.value}`,
    }
    modal.current?.dismiss(binnacleGroup, 'confirm');
  }
  
  function onWillDismiss(event: CustomEvent<OverlayEventDetail>) {
    const { role, data: newBinnacleGroup } = event.detail;

    if (role === 'confirm') {
      console.log(newBinnacleGroup);
    }
  }

  const renderModal = () => {
    return(
      <IonModal ref={modal} trigger="open-modal" onWillDismiss={(event) => onWillDismiss(event)}>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonButton onClick={() => modal.current?.dismiss()}>Cancel</IonButton>
            </IonButtons>
            <IonTitle className='ion-text-center'>Crear | BitacGroup</IonTitle>
            <IonButtons slot="end">
              <IonButton strong={true} onClick={() => confirm()}>Crear</IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonItem>
            <IonLabel position="stacked">Titulo</IonLabel>
            <IonInput ref={inputTitle} type="text" placeholder="Nombre de grupo de bitacora" />
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Fecha de creación</IonLabel>
            <IonInput ref={inputDate} type="date" value={currentDate} />
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Imagen de portada</IonLabel>
            <IonInput ref={inputImgUrl} type="text" placeholder="Por el momento URL uwu" />
          </IonItem>
        </IonContent>
      </IonModal>
    );
  }
  
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonFab  vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton id="open-modal">
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab>
        { renderModal() }
      </IonContent>
    </IonPage>
  );
};

export default Home;

