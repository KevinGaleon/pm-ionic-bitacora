import { IonButton, IonButtons, IonHeader, IonIcon, IonTitle, IonToolbar, IonContent, IonCard } from '@ionic/react';
import { arrowBack } from 'ionicons/icons';
import { setAppHeaderTitle } from '../redux/reducers/appHeaderReducer/appHeader';
import { useReduxSelector, useReduxDispatch } from '../redux/store';


const AppHeader = () => {
  const dispatch = useReduxDispatch();
  const { title } = useReduxSelector(state => state.appHeader);

  if (title !== 'Home') {
    return (
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton onClick={() => dispatch(setAppHeaderTitle('Home'))} href='/home'>
              <IonIcon slot="icon-only" icon={arrowBack} color='black'/>
            </IonButton>
          </IonButtons>
          <IonTitle>{title}</IonTitle>
        </IonToolbar>
      </IonHeader>
    );
  }

  return (
    <IonHeader>
      <IonToolbar>
        <IonTitle>{title}</IonTitle>
       <IonCard></IonCard>
      </IonToolbar>
    </IonHeader>
    
  )
}

export default AppHeader;