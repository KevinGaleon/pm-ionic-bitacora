import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton, IonImg, IonButtons } from '@ionic/react';
import './Card.css';

interface Props {
  frontPage: string;
  tittle: string;
  date: string;
  onClick?: () => void;
}

export const Card = (props: Props) => {

  const { date, frontPage, tittle, onClick } = props;

  return (
    <IonButtons onClick={onClick}>
      <IonCard>
        <IonCardHeader>
          <IonImg src={frontPage}></IonImg>
          <IonCardTitle>{tittle}</IonCardTitle>
          <IonCardSubtitle>{date}</IonCardSubtitle>
        </IonCardHeader>
      </IonCard>
    </IonButtons>

  );
};
