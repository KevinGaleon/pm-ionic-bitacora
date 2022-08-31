import { IonContent, IonFab, IonFabButton, IonIcon, IonPage } from '@ionic/react';
import { add } from 'ionicons/icons';
import './Home.css';

const Home = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton>
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Home;
