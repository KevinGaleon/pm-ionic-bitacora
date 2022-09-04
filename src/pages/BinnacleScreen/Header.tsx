import { IonButton, IonButtons, IonHeader, IonIcon, IonTitle, IonToolbar } from '@ionic/react'
import React from 'react'

interface headerSideElement {
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
          </IonButton>
        </IonButtons>
        <IonTitle className='ion-text-center'>{title}</IonTitle>
        <IonButtons slot="end">
          <IonButton onClick={headerRight?.onClick} routerLink={headerRight?.routerLink} >
            <IonIcon slot="icon-only" icon={headerRight?.icon} color={headerRight?.iconColor}/>
          </IonButton>
        </IonButtons>
      </IonToolbar>
  </IonHeader>
  )
}

export default Header;