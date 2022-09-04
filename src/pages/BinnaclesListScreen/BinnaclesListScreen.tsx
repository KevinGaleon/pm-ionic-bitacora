import React, { useEffect, useRef } from 'react';
import { add } from 'ionicons/icons';
import { IonContent, IonFab, IonFabButton, IonHeader, IonIcon, IonPage } from '@ionic/react';
import './BinnaclesListScreen.css';
import { Binnacle } from '../../common/interfaces/binnacle';
import { useReduxDispatch } from '../../redux/store';
import { fetchBinnacles } from '../../redux/services/binnacle.services';
import { CardBinnaclesList } from '../../components/CardBinnaclesList/CardBinnaclesList';


const BinnaclesListScreen = () => {
  const dispatch = useReduxDispatch();
 // const { binnacleList } = useReduxSelector(state => state.binnacle);

  useEffect(() => {
    dispatch(fetchBinnacles());
  }, [dispatch]);

  const binnacleList: Binnacle[] = [
    {
      binnacleGroupId: 'asdv',
      title: 'Lenguaaaaaaaaaaaaaaaaaaaaaaaa',
      date: '2222',
      description: 'lorem',
      comment: 'asfdgsfdbgwrgf'
    }
  ]

  return (
    <IonPage>
      <IonContent fullscreen>
        {binnacleList.map(binnacles => {
          return <CardBinnaclesList 
            tittle={binnacles.title}
            date={binnacles.date}
            description={binnacles.description}
          />
        })}
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton id="open-modal">
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab>

      </IonContent>
    </IonPage>
  );
};

export default BinnaclesListScreen;

