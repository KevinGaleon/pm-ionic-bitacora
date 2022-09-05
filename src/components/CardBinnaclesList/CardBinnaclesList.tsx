import React from 'react';
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem } from '@ionic/react';
import './CardBinnaclesList.css';

interface Props {
  tittle: string;
  date: string;
  description: string;
  routerLink?: string;
  onClick?: () => void;
}

export const CardBinnaclesList = (props: Props) => {

  const { date, description, tittle, onClick, routerLink } = props;

  return (
    <IonCard>
      <IonItem button onClick={onClick} routerLink={routerLink}>
        <IonCardHeader>
          <IonCardTitle>{tittle}</IonCardTitle>
          <IonCardSubtitle>{date}</IonCardSubtitle>
          <IonCardContent>{description}</IonCardContent>
        </IonCardHeader>
      </IonItem>
    </IonCard>
  );
};
