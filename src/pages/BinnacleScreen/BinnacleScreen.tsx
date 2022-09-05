import React from 'react'
import { IonCol, IonContent, IonGrid, IonImg, IonLabel, IonPage, IonRow, IonText } from '@ionic/react';
import Header from '../../components/Header/Header';
import { useReduxSelector } from '../../redux/store';
import { arrowBack } from 'ionicons/icons';
import { useHistory } from 'react-router';

const BinnacleScreen = () => {
  const { binnacleSelected } = useReduxSelector(state => state.binnacle);
  const { title } = useReduxSelector(state => state.binnacleGroup.binnacleGroupSelected);
  const history = useHistory();

  return (
    <IonPage>
      <Header
        title={title}
        headerLeft={{ icon: arrowBack, onClick: () => history.goBack() }}
      />
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonText color='dark'>
                <h1>{binnacleSelected.title}</h1>
              </IonText>
            </IonCol>
            <IonCol>
              <IonText color='dark'>
                <p>{binnacleSelected.date}</p>
              </IonText>
            </IonCol>
          </IonRow>

          <IonRow><IonLabel>Descripción:</IonLabel></IonRow>
          <IonRow>
            <IonCol>
              <IonText>
                <h4>{binnacleSelected.description}</h4>
              </IonText>
            </IonCol>
          </IonRow>

          <IonRow><IonLabel>Observación:</IonLabel></IonRow>
          <IonRow>
            <IonCol>
              <IonText>
                <h4>{binnacleSelected.comment}</h4>
              </IonText>
            </IonCol>
          </IonRow>
          
          { binnacleSelected.photos?.map(url => {
            return (
              <IonRow>
                <IonImg src={url}></IonImg>
              </IonRow>
            );
          })}
        </IonGrid>
      </IonContent>
    </IonPage>
  );
}

export default BinnacleScreen;