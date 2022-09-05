import { IonCol, IonContent, IonGrid, IonImg, IonLabel, IonPage, IonRow, IonText, IonFab, IonFabButton, IonIcon, IonFabList } from '@ionic/react';
import React from 'react'
import Header from '../../components/Header/Header';
import { arrowBack, chevronBackCircle, chevronDownOutline, cloudDownload, cloudDownloadOutline, ellipsisHorizontal, pencil, person, trash } from 'ionicons/icons';
import { useReduxSelector } from '../../redux/store';

const BinnacleScreen = () => {
  const { binnacleSelected } = useReduxSelector(state => state.binnacle);
  const { title } = useReduxSelector(state => state.binnacleGroup.binnacleGroupSelected);

  return (
    <IonPage>
      <Header
        title={title}
        headerLeft={{ icon: arrowBack, routerLink: '/binnacles' }}
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

      <IonFab vertical="bottom" horizontal="end">
      <IonFabButton>
      <IonIcon icon={chevronBackCircle} />
      </IonFabButton>

      <IonFabList side="start">
        <IonFabButton>
          <IonIcon icon={pencil} />
        </IonFabButton>
        <IonFabButton>
          <IonIcon icon={cloudDownload} />
        </IonFabButton>
        <IonFabButton>
          <IonIcon icon={trash} />
        </IonFabButton>
      </IonFabList>
    </IonFab>
    </IonPage>
  );
}

export default BinnacleScreen;