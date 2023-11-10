import React, { useState, useContext } from 'react';
import {
    IonPage, IonContent, IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton,
    IonLabel, IonInput, IonButton, IonIcon
} from '@ionic/react';
import { cardOutline, cashOutline, peopleOutline, arrowBack } from 'ionicons/icons';
import { useHistory } from 'react-router-dom';
import { useShoppingCart } from '../contexts/ShoppingCartContext';

const PaymentPage: React.FC = () => {
    const { items, setItems } = useShoppingCart();
    const [email, setEmail] = useState('');
    const history = useHistory();

    // Fügen Sie hier weitere Zustände für die Zahlungsinformationen hinzu

    const handlePayment = () => {
        history.push('/')
        setItems([]); 
    };

    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Zahlung</IonTitle>
                    <IonButtons slot="start">
                        <IonButton onClick={() => history.goBack()}>
                            <IonIcon slot="icon-only" icon={arrowBack} />
                        </IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonLabel>Insgesamt: {total} €</IonLabel>
                <IonButton expand="block" onClick={handlePayment} >
                    <IonIcon slot="start" icon={cardOutline} />
                    Online bezahlen
                </IonButton>
                <IonButton expand="block" onClick={handlePayment}>
                    <IonIcon slot="start" icon={cashOutline} />
                    Barzahlung
                </IonButton>
                <IonButton expand="block" onClick={handlePayment}>
                    <IonIcon slot="start" icon={peopleOutline} />
                    Gruppenzahlung
                </IonButton>

                {/* Fügen Sie hier weitere UI-Elemente hinzu, wie z.B. einen Footer */}
            </IonContent>
        </IonPage>
    );
};

export default PaymentPage;
