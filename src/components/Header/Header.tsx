import React from 'react'
import { IonButton, IonButtons, IonHeader, IonIcon, IonLabel, IonTitle, IonToolbar } from '@ionic/react'
import './Header.css';

interface headerSideElement {
  title?: string;
  iconColor?: string;
  icon?: string;
  routerLink?: string;
  onClick?: () => void;
}

interface Props {
  title: string;
  headerRight?: headerSideElement;
  headerLeft?: headerSideElement;
}

const Header = (props: Props) => {
  const { title, headerRight, headerLeft } = props;

  return (
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonButton onClick={headerLeft?.onClick} routerLink={headerLeft?.routerLink} >
            <IonIcon slot="icon-only" icon={headerLeft?.icon} color={headerLeft?.iconColor}/>
            <IonLabel>{headerLeft?.title}</IonLabel>
          </IonButton>
        </IonButtons>
        <IonTitle className='ion-text-center'>{title}</IonTitle>
        <IonButtons slot="end">
          <IonButton onClick={headerRight?.onClick} routerLink={headerRight?.routerLink} className='custom-button-content' >
            <IonIcon icon={headerRight?.icon} color={headerRight?.iconColor}/>
            <IonLabel>{headerRight?.title}</IonLabel>
          </IonButton>
        </IonButtons>
      </IonToolbar>
  </IonHeader>
  )
}

export default Header;