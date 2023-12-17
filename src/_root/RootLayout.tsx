import React, { useState, FC, useRef, useEffect, ReactNode } from 'react';
import {
  IonContent, IonHeader, IonToolbar, IonTitle, IonIcon, IonItem, IonButtons, IonMenuButton,
} from '@ionic/react';
import { arrowBack, languageOutline, person } from 'ionicons/icons';
import menuDataDe from '../menuData_de.json';
import menuDataEn from '../menuData_en.json';

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  // Layout-Logik hier
  return (
    <>
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonButtons slot="end">
            <IonMenuButton>
              <IonIcon icon={person}/>
            </IonMenuButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
         {children}
      </IonContent>
    </>

  )
};

export default RootLayout;