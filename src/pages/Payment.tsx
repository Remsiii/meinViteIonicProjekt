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
        // Implementieren Sie hier die Logik für den Zahlungsvorgang
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
                            Zurück
                        </IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonLabel>Insgesamt: {total} €</IonLabel>
                <IonInput
                    value={email}
                    onIonChange={(e) => setEmail(e.detail.value ?? '')} // Verwenden Sie den Nullish Coalescing Operator (??)
                    placeholder="E-Mail Adresse"
                />
                <IonButton expand="block" onClick={handlePayment}>
                    <IonIcon slot="start" icon={cardOutline} />
                    Plată Online
                </IonButton>
                <IonButton expand="block" onClick={handlePayment}>
                    <IonIcon slot="start" icon={cashOutline} />
                    Plată la Casă
                </IonButton>
                <IonButton expand="block" onClick={handlePayment}>
                    <IonIcon slot="start" icon={peopleOutline} />
                    Plată de Grup
                </IonButton>

                {/* Fügen Sie hier weitere UI-Elemente hinzu, wie z.B. einen Footer */}
            </IonContent>
        </IonPage>
    );
};

export default PaymentPage;
