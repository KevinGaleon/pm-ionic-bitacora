import { IonContent, IonFab, IonFabButton, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { add } from 'ionicons/icons';
import './Home.css';
import React, { useState, useRef } from 'react';
import {IonButtons,IonButton,IonModal,IonItem,IonLabel, IonInput} from '@ionic/react';
import { OverlayEventDetail } from '@ionic/core/components';


const Home = () => {

  const [message, setMessage] = useState(
    'This modal example uses triggers to automatically open a modal when the button is clicked.'
  );
  
  function confirm() {
    modal.current?.dismiss(input.current?.value, 'confirm');
  }
  
  function onWillDismiss(ev: CustomEvent<OverlayEventDetail>) {
    if (ev.detail.role === 'confirm') {
      setMessage(`Hello, ${ev.detail.data}!`);
    }
  }
  
  
  const modal = useRef<HTMLIonModalElement>(null);
  const input = useRef<HTMLIonInputElement>(null);
  
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonFab  vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton id="open-modal">
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab>
        <IonModal ref={modal} trigger="open-modal" onWillDismiss={(ev) => onWillDismiss(ev)}>
          <IonHeader>
            <IonToolbar>
              <IonButtons slot="start">
                <IonButton onClick={() => modal.current?.dismiss()}>Cancel</IonButton>
              </IonButtons>
              <IonTitle>Crear | BitaGroup</IonTitle>
              <IonButtons slot="end">
                <IonButton strong={true} onClick={() => confirm()}>
                  Crear
                </IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">
            <IonItem>
              <IonLabel position="stacked">Titulo</IonLabel>
              <IonInput ref={input} type="text" placeholder="Nombre de grupo de bitacora" />
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">Fecha de creación</IonLabel>
              <IonInput ref={input} type="date" />
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">Imagen de portada</IonLabel>
              <IonInput ref={input} type="text" placeholder="Por el momento URL uwu" />
            </IonItem>
          </IonContent>
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default Home;

