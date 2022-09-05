import { IonContent, IonPage } from '@ionic/react';
import { arrowBack } from 'ionicons/icons';
import { useHistory } from 'react-router';
import Header from '../../components/Header/Header';
import './Settings.css';

const Settings = () => {
  const history = useHistory();

  return (
    <IonPage>
      <Header
        title='Configuraciones'
        headerLeft={{ icon: arrowBack, onClick: () => history.goBack() }}
      />
      <IonContent fullscreen>
        
      </IonContent>
    </IonPage>
  );
};

export default Settings;
