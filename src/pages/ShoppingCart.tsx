import React from 'react';
import {
  IonPage, IonContent, IonList, IonItem, IonLabel,
  IonButton, IonIcon, IonInput, IonHeader, IonToolbar,
  IonTitle, IonFooter, IonButtons, IonBackButton
} from '@ionic/react';
import { pencilOutline, trashOutline, closeCircle, removeCircleOutline, addCircleOutline } from 'ionicons/icons';
import { useShoppingCart } from '../contexts/ShoppingCartContext';
import { useHistory } from 'react-router-dom';

const ShoppingCartPage: React.FC = () => {
  const history = useHistory();
  const { items, setItems } = useShoppingCart();

  const removeFromCart = (itemTitle: string) => {
    setItems(items.filter(item => item.title !== itemTitle));
  };

  const updateQuantity = (itemTitle: string, newQuantity: number) => {
    setItems(items.map(item => item.title === itemTitle ? { ...item, quantity: newQuantity } : item));
  };

  const increaseQuantity = (itemTitle: string) => {
    const item = items.find(item => item.title === itemTitle);
    if (item) {
      updateQuantity(itemTitle, item.quantity + 1);
    }
  };
  
  const decreaseQuantity = (itemTitle: string) => {
    const item = items.find(item => item.title === itemTitle);
    if (item && item.quantity > 1) { // Stellen Sie sicher, dass die Menge nicht unter 1 fällt
      updateQuantity(itemTitle, item.quantity - 1);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Cosul Meu</IonTitle>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonButtons slot="end">
            <IonButton onClick={() => history.goBack()}>
              <IonIcon slot="icon-only" icon={closeCircle} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent style={{ padding: '1rem' }}>
        <IonList>
          {items.map((item, index) => (
            <IonItem key={index} lines="full" style={{
              marginBottom: '1rem',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              borderRadius: '8px',
            }}>
              <IonLabel style={{ flex: '1', padding: '1rem' }}>
                <h2 style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>{item.title}</h2>
                <p style={{ fontSize: '1rem' }}>{`${item.price.toFixed(2)} €`}</p>
              </IonLabel>

              

              <div style={{ display: 'flex', alignItems: 'center' }}>
                <IonButton fill="clear" onClick={() => decreaseQuantity(item.title)}>
                  <IonIcon icon={removeCircleOutline} />
                </IonButton>
                <IonInput
                  type="number"
                  value={item.quantity.toString()}
                  onIonChange={e => updateQuantity(item.title, parseInt(e.detail.value!, 10))}
                  style={{ maxWidth: '50px', margin: '0 8px', textAlign: 'center', fontSize: '1.1rem' }}
                />
                <IonButton fill="clear" onClick={() => increaseQuantity(item.title)}>
                  <IonIcon icon={addCircleOutline} />
                </IonButton>
              </div>

              <IonButton fill="clear" onClick={() => removeFromCart(item.title)}>
                <IonIcon icon={trashOutline} />
              </IonButton>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
      <IonFooter style={{ padding: '1rem' }}>
        <IonButton expand="block" style={{ marginBottom: '1rem' }}>
          Goleste Cosul
        </IonButton>
        <IonButton expand="block" style={{ marginBottom: '1rem' }}>
          Aplica Cupon
        </IonButton>
        <IonButton expand="block" style={{ marginBottom: '1rem' }}>
          Adauga Bacsis
        </IonButton>
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem' }}>
          <IonLabel style={{ fontSize: '1.1rem' }}>TOTAL:</IonLabel>
          <IonLabel style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>
            {/* Hier sollten Sie die Gesamtsumme berechnen und anzeigen */}
            {items.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)} €
          </IonLabel>
        </div>
        <IonButton expand="block" onClick={() => history.push('/payment')}>
            Plateste
        </IonButton>
      </IonFooter>
    </IonPage>
  );
};

export default ShoppingCartPage;
