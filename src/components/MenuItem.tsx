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
    addToCart({ ...item, quantity: 1 });
  };

  const glassEffectStyle = {
    background: 'rgba(255, 255, 255, 0.21)',
    borderRadius: '16px',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(3.9px)',
    WebkitBackdropFilter: 'blur(3.9px)',
    border: '1px solid rgba(255, 255, 255, 0.01)',
  };

  return ( 
    <IonItem lines="none" style={glassEffectStyle} className="mb-2">
      <IonLabel className="ion-text-wrap">
        <h2>{item.title}</h2>
        <p>{item.description}</p>
      </IonLabel>
      <div className="flex flex-col justify-center items-end">
  <IonNote className="text-lg">
    {item.price.toFixed(2)} €
  </IonNote>
</div>

      <IonButton
        fill="clear"
        style={{ color: '#C5E1A5' }}
        onClick={handleAddToCart}
      >
        <IonIcon icon={addCircleOutline} className="text-4xl" />
      </IonButton>
    </IonItem>
  );
};

export default MenuItem;
