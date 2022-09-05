import React from 'react';
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonImg, IonItem } from '@ionic/react';

interface Props {
  frontPage: string;
  title: string;
  date: string;
  routerLink?: string;
  onClick?: () => void;
}

export const Card = (props: Props) => {
  const { date, frontPage, title, onClick, routerLink } = props;
  return (
    <IonCard>
      <IonItem button onClick={onClick} routerLink={routerLink}>
        <IonCardHeader>
          <IonCardSubtitle>
            <IonImg src={frontPage}></IonImg>
          </IonCardSubtitle>
          <IonCardTitle>{title}</IonCardTitle>
          <IonCardSubtitle>{date}</IonCardSubtitle>
        </IonCardHeader>
      </IonItem>
    </IonCard>
  );
};
