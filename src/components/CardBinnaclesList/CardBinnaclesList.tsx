import React from 'react';
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonButtons, IonGrid, IonRow, IonCol } from '@ionic/react';
import './CardBinnaclesList.css';

interface Props {
  tittle: string;
  date: string;
  description: string;
  onClick?: () => void;
}

export const CardBinnaclesList = (props: Props) => {

  const { date, description, tittle, onClick } = props;

  return (

    <IonButtons onClick={onClick}>
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>{tittle}</IonCardTitle>
          <IonCardSubtitle>{date}</IonCardSubtitle>
          <IonCardContent>{description}</IonCardContent>
        </IonCardHeader>
      </IonCard>
    </IonButtons>



  );
};
