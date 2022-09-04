import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonContent, IonIcon, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { home, person } from 'ionicons/icons';

import Home from './pages/Home/Home';
import Settings from './pages/Settings/Settings';
import AppHeader from './components/AppHeader';
import { useReduxDispatch } from './redux/store';
import { setAppHeaderTitle } from './redux/reducers/appHeaderReducer/appHeader';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import BinnaclesListScreen from './pages/BinnaclesListScreen/BinnaclesListScreen';

setupIonicReact();

const App = () => {
  const dispatch = useReduxDispatch();

  return (
    <IonApp>
      <IonReactRouter>
        <AppHeader />
        <IonContent>
          <IonTabs>
            <IonRouterOutlet>
              <Route exact path="/home" component={Home} />
              <Route exact path="/settings" component={Settings} />
              <Route exact path="/binnacles" component={BinnaclesListScreen} />
              <Route exact path="/">
                <Redirect to="/home" />
              </Route>
            </IonRouterOutlet>
            <IonTabBar slot='bottom'>
              <IonTabButton onClick={() => dispatch(setAppHeaderTitle('Home'))} tab='home' href='/home'>
                <IonIcon icon={home} />
              </IonTabButton>
              <IonTabButton onClick={() => dispatch(setAppHeaderTitle('Settings'))} tab='settings' href='/settings'>
                <IonIcon icon={person} />
              </IonTabButton>
            </IonTabBar>
          </IonTabs>
        </IonContent>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
