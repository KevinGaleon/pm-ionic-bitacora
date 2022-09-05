import { IonContent, IonPage } from '@ionic/react';
import { arrowBack } from 'ionicons/icons';
import Header from '../../components/Header/Header';
import './Settings.css';

const Settings = () => {
  return (
    <IonPage>
      <Header
        title='Configuraciones'
        headerLeft={{ icon: arrowBack, routerLink: '/home' }}
      />
      <IonContent fullscreen>
        
      </IonContent>
    </IonPage>
  );
};

export default Settings;
