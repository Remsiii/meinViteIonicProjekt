import React, { useState, FC, useRef, useEffect } from 'react';
import {
  IonContent, IonPage, IonButton, IonSegment, IonSegmentButton, IonLabel,
  IonMenu, IonHeader, IonToolbar, IonTitle, IonButtons, IonMenuButton, IonList, IonItem
} from '@ionic/react';
import MenuItem from '../components/MenuItem';
import menuData from '../menuData_de.json';
import { useShoppingCart } from '../contexts/ShoppingCartContext';
import { CartItem } from '../types/CartItem';
import { useHistory } from 'react-router-dom';
import CategoryScroller from '../components/CategoryScroller';

const Home: FC = () => {
  const { items, setItems } = useShoppingCart();
  const history = useHistory();
  const [selectedCategory, setSelectedCategory] = useState<string>(menuData[0].type);

  const categories = Array.from(new Set(menuData.map(item => item.type)));


  const cartItemCount = items.reduce((count, item) => count + item.quantity, 0);

  return (
    <>
      <IonMenu contentId="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Menu Content</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          Einstellungen

          <IonList>
            <IonItem button>
              Sprache ändern
            </IonItem>

          </IonList>
        </IonContent>
      </IonMenu>

      <IonPage>
        <div className="flex items-center" id="main-content">
          <CategoryScroller
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />

        </div>
        <IonContent>
        {menuData
          .filter(item => item.type === selectedCategory)
          .map((item, index) => (
            <MenuItem
              key={index}
              item={item}
            />
          ))
        }
        </IonContent>
        {cartItemCount > 0 && (
          <IonButton
            className="cart-button"
            fill="clear"
            onClick={() => history.push('/cart')}>
            🛒 {cartItemCount}
          </IonButton>
        )}

        <IonButtons slot="start">
          <IonMenuButton></IonMenuButton>
        </IonButtons>

      </IonPage>
    </>
  );
};

export default Home;
