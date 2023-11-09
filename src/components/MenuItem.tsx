import React from 'react';
import { IonItem, IonLabel, IonNote, IonButton, IonIcon } from '@ionic/react';
import { addCircleOutline } from 'ionicons/icons';
import { CartItem } from '../types/CartItem';

interface MenuItemProps {
  item: CartItem;
  addToCart: (item: CartItem & { quantity: number }) => void; // Diese Funktion könnte auch den Typ von Item verwenden, wenn nötig
}


const MenuItem: React.FC<MenuItemProps> = ({ item, addToCart }) => {
  const handleAddToCart = () => {
    addToCart({ ...item, quantity: 1 }); // Füge das Item mit einer Quantity von 1 hinzu
  };

  
  return (
    <IonItem lines="none">
      <IonLabel className="ion-text-wrap">
        <h2>{item.title}</h2>
        <p>{item.description}</p>
      </IonLabel>
      <IonNote slot="end">
        {item.price.toFixed(2)} €
      </IonNote>
      <IonButton fill="clear" slot="end" className="bg-customGreen rounded-full custom-button ml-3" onClick={handleAddToCart}>
        <IonIcon icon={addCircleOutline} className="text-3xl" />
      </IonButton>
    </IonItem>
  );
};

export default MenuItem;
