import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Ionic Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
      Luis Aneuris Tavarez De Jesus
        <h1>
          Tarea 2 De Programacion 2</h1>
        <p>
          <hr/>
         <b> Matricula:</b>2018-6927
         <br/>
         <b> Materia:</b>Programacion 2
         <br/>
         <b> Profesor:</b>Kellyn Tejada Belliard
         <br/>
         <b> Tecnologia:</b>IONIC
        </p>
      </IonContent>
    </IonPage>
  );
};

export default Home;
