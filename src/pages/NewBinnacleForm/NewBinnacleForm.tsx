import React, { useRef, useState } from 'react'
import { IonCol, IonContent, IonGrid, IonIcon, IonImg, IonInput, IonItem, IonLabel, IonPage, IonRow, IonTextarea } from '@ionic/react';
import { close, sendOutline, trash } from 'ionicons/icons';
import Header from '../../components/Header/Header';
import { formatLocaleDate } from '../../utils/date';
import { useHistory } from 'react-router';
import { Binnacle } from '../../common/interfaces/binnacle';
import { useReduxDispatch, useReduxSelector } from '../../redux/store';
import { createBinnacle } from '../../redux/services/binnacle.services';

const NewBinnacleForm = () => {
  const inputTitle = useRef<HTMLIonInputElement>(null);
  const inputDate = useRef<HTMLIonInputElement>(null);
  const inputUrl = useRef<HTMLIonInputElement>(null);
  const inputDescription = useRef<HTMLIonTextareaElement>(null);
  const inputComment = useRef<HTMLIonTextareaElement>(null);
  const [photos, setPhotos] = useState([
    'https://images.pexels.com/photos/66898/elephant-cub-tsavo-kenya-66898.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://cdn.pixabay.com/photo/2012/06/19/10/32/owl-50267__480.jpg',
    'https://www.anipedia.net/imagenes/fotos-aguilas-250x150.jpg',
    'https://cdn.pixabay.com/photo/2017/02/07/16/47/kingfisher-2046453_960_720.jpg',
  ]);
  const currentDate = formatLocaleDate(`${new Date()}`);
  const history = useHistory();

  const { _id: binnacleGroupId } = useReduxSelector(state => state.binnacleGroup.binnacleGroupSelected);
  const dispatch = useReduxDispatch();

  const addPhoto = () => {
    const url =  inputUrl.current?.value;
    if (url) {
      setPhotos([...photos, `${url}`]);
      inputUrl.current!.value = '';
    }
  }

  const removePhoto  = (url: string) => {
    const newPhotos = photos.filter(img => url !== img);
    setPhotos(newPhotos);
  }

  const renderAddButton = () => {
    return (
      <IonCol size='4'>
        <IonItem button onClick={addPhoto}>
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
          <IonItem button onClick={() => removePhoto(photos[index])}>
            <IonIcon icon={trash} />
          </IonItem>
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

  const onSubmit = () => {
    const newBinnacle: Binnacle = {
      binnacleGroupId: binnacleGroupId ?? '',
      title: `${inputTitle.current?.value}`,
      description: `${inputDescription.current?.value}`,
      date: `${inputDate.current?.value}`,
      comment: `${inputComment.current?.value}`,
      photos,
    }
    dispatch(createBinnacle(newBinnacle));
    goToBinnacleScreen();
  }

  const goToBinnacleScreen = () => {
    history.replace('/binnacle');
  }

  return (
    <IonPage>
      <Header
        title='Nueva Bitácora'
        headerLeft={{ icon: close, onClick: () => history.goBack() }}
        headerRight={{
          icon: sendOutline,
          onClick: onSubmit,
        }}
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

          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">Url de imagen</IonLabel>
                <IonInput ref={inputUrl} type="text" />
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