import React, { useRef, useState } from 'react'
import { IonCol, IonContent, IonGrid, IonImg, IonInput, IonItem, IonLabel, IonPage, IonRow, IonTextarea, IonThumbnail, IonButtons, IonButton, IonIcon } from '@ionic/react';
import { close, sendOutline } from 'ionicons/icons';
import Header from '../../components/Header/Header';
import { formatLocaleDate } from '../../utils/date';

const NewBinnacleForm = () => {
  const inputTitle = useRef<HTMLIonInputElement>(null);
  const inputDate = useRef<HTMLIonInputElement>(null);
  const inputDescription = useRef<HTMLIonTextareaElement>(null);
  const inputComment = useRef<HTMLIonTextareaElement>(null);
  const [photos, setPhotos] = useState([
    'https://images.pexels.com/photos/66898/elephant-cub-tsavo-kenya-66898.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://cdn.pixabay.com/photo/2012/06/19/10/32/owl-50267__480.jpg',
    'https://www.anipedia.net/imagenes/fotos-aguilas-250x150.jpg',
    'https://cdn.pixabay.com/photo/2017/02/07/16/47/kingfisher-2046453_960_720.jpg',
  ]);
  const currentDate = formatLocaleDate(`${new Date()}`);

  const renderAddButton = () => {
    return (
      <IonCol size='4'>
        <IonItem button onClick={() => console.log('TODO open alert to add new image')}>
          <IonLabel class='ion-text-center'>AGG IMAGEN</IonLabel>
        </IonItem>
      </IonCol>
    );
  }

  const renderImages = () => {
    const rows: JSX.Element[] = [];
    let cols: JSX.Element[] = [];

    for (let index = 0; index < photos.length; index++) {
      cols.push(
        <IonCol size='4'>
          <IonImg src={photos[index]}></IonImg>
        </IonCol>
      );
      if ((index + 1) % 3 === 0) {
        const row = <IonRow>{cols}</IonRow>;
        cols = [];
        rows.push(row);
      }
    }

    if (cols.length === 3) {
      const row = <IonRow>{cols}</IonRow>;
      rows.push(row);
    } else {
      cols.push(renderAddButton());
      const row = <IonRow>{cols}</IonRow>;
      rows.push(row);
    }

    return  rows;
  }

  const resetInputs = () => {
    inputTitle.current!.value = '';
    inputDate.current!.value = '';
    inputDescription.current!.value = '';
    inputComment.current!.value = '';
  }

  return (
    <IonPage>
      <Header
        title='Nueva Bitácora'
        headerLeft={{ icon: close, routerLink: '/binnacles', onClick: resetInputs }}
        headerRight={{ icon:sendOutline , onClick: () => console.log('TODO crear nueva bitacora and dispatch response.data binacle selected'), routerLink: '/binnacle' }}
      />
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol size='7'>
              <IonItem>
                <IonLabel position="floating">Titulo</IonLabel>
                <IonInput ref={inputTitle} type="text"/>
              </IonItem>
            </IonCol>
            <IonCol size='5'>
              <IonItem>
                <IonLabel position="stacked">Fecha</IonLabel>
                <IonInput ref={inputDate} type="date" value={currentDate} defaultValue={currentDate} />
              </IonItem>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">Descripción</IonLabel>
                <IonTextarea ref={inputDescription} rows={4} />
              </IonItem>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">Comentario</IonLabel>
                <IonTextarea ref={inputComment} rows={4} />
              </IonItem>
            </IonCol>
          </IonRow>

          { renderImages() }

        </IonGrid>
      </IonContent>
    </IonPage>
  )
}

export default NewBinnacleForm;