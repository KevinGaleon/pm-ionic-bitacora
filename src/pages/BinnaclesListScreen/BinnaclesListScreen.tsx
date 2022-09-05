import React, { useEffect } from 'react';
import { add, arrowBack, ellipsisHorizontal } from 'ionicons/icons';
import { IonContent, IonFab, IonFabButton, IonIcon, IonPage } from '@ionic/react';
import './BinnaclesListScreen.css';
import { useReduxDispatch, useReduxSelector } from '../../redux/store';
import { fetchBinnacles } from '../../redux/services/binnacle.services';
import { CardBinnaclesList } from '../../components/CardBinnaclesList/CardBinnaclesList';
import Header from '../../components/Header/Header';
import { setBinnacleSelected } from '../../redux/reducers/binnacleReducer/binnacle';
import { useHistory } from 'react-router';

const BinnaclesListScreen = () => {
  const dispatch = useReduxDispatch();
  const { binnacleGroupSelected } = useReduxSelector(state => state.binnacleGroup);
  const { binnacleList } = useReduxSelector(state => state.binnacle);
  const history = useHistory();

  useEffect(() => {
    dispatch(fetchBinnacles(binnacleGroupSelected._id ?? ''));
  }, [dispatch, binnacleGroupSelected._id]);

  return (
    <IonPage>
      <Header
        title={'Bitácoras - ' + binnacleGroupSelected.title}
        headerLeft={{ icon: arrowBack, onClick: () => history.goBack() }}
        headerRight={{ icon: ellipsisHorizontal }}
      />
      <IonContent fullscreen>
        {binnacleList.map(binnacle => {
          return <CardBinnaclesList 
            tittle={binnacle.title}
            date={binnacle.date}
            description={binnacle.description}
            onClick={() => dispatch(setBinnacleSelected(binnacle))}
            routerLink='/binnacle'
          />
        })}
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton routerLink='/new-binnacle'>
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab>

      </IonContent>
    </IonPage>
  );
};

export default BinnaclesListScreen;

