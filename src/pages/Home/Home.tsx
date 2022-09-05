import React, { useEffect, useRef } from 'react';
import { add } from 'ionicons/icons';
import { IonContent, IonFab, IonFabButton, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar, IonButtons, IonButton, IonModal, IonItem, IonLabel, IonInput } from '@ionic/react';
import { OverlayEventDetail } from '@ionic/core/components';

import './Home.css';
import { BinnaclesGroup } from '../../common/interfaces/binnaclesGroup';
import { formatLocaleDate } from '../../utils/date';
import { Card } from '../../components/Card/Card';
import { useReduxDispatch, useReduxSelector } from '../../redux/store';
import { createBinnaclesGroup, fetchBinnaclesGroups } from '../../redux/services/binnaclesGroup.services';
import Header from '../../components/Header/Header';
import { setBinnacleGroupSelected } from '../../redux/reducers/binnaclesGroupReducer/binnaclesGroup';

const Home = () => {
  const modal = useRef<HTMLIonModalElement>(null);
  const inputTitle = useRef<HTMLIonInputElement>(null);
  const inputDate = useRef<HTMLIonInputElement>(null);
  const inputFrontPage = useRef<HTMLIonInputElement>(null);
  const currentDate = formatLocaleDate(`${new Date()}`);
  const dispatch = useReduxDispatch ();
  const {binnacleGroupList} = useReduxSelector(state => state.binnacleGroup);

  useEffect(() => {
    dispatch(fetchBinnaclesGroups());
  }, [dispatch]);

  function confirm() {
    const binnacleGroup: BinnaclesGroup = {
      title: `${inputTitle.current?.value}`,
      date: `${inputDate.current?.value}`,
      frontPage: `${inputFrontPage.current?.value}`,
    }
    modal.current?.dismiss(binnacleGroup, 'confirm');
  }
  
  function onWillDismiss(event: CustomEvent<OverlayEventDetail>) {
    const { role, data: newBinnacleGroup } = event.detail;

    if (role === 'confirm') {
      dispatch(createBinnaclesGroup(newBinnacleGroup));
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
            <IonInput ref={inputFrontPage} type="text" placeholder="Por el momento URL uwu" />
          </IonItem>
        </IonContent>
      </IonModal>
    );
  }

  return (
    <IonPage>
      <Header title='Grupos de Bitácoras' />
      <IonContent fullscreen>
       {binnacleGroupList.map(binnaclesGroup =>{
        return <Card 
          frontPage={binnaclesGroup.frontPage} 
          title={binnaclesGroup.title}
          date={binnaclesGroup.date}  
          onClick={() => dispatch(setBinnacleGroupSelected(binnaclesGroup))} 
          routerLink='/binnacles'
        />
      })}
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

