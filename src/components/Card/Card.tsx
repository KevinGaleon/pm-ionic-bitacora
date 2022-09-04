import React from 'react';
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonImg, IonItem } from '@ionic/react';

interface Props {
  frontPage: string;
  title: string;
  date: string;
}

export const Card = (props: Props) => {
  const { date, frontPage, title } = props;
  
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardSubtitle>
          <IonImg src={frontPage}></IonImg>
        </IonCardSubtitle>
        <IonCardTitle>{title}</IonCardTitle>
        <IonCardSubtitle>{date}</IonCardSubtitle>
      </IonCardHeader>
    </IonCard>
  );
};
