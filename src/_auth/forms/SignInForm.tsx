import React from 'react';
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonAlert } from '@ionic/react';

const SignInForm = () => {
  return (
    <>
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>Card Title</IonCardTitle>
        <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>Here's a small text description for the card content. Nothing more, nothing less.</IonCardContent>

      <IonButton fill="clear">Action 1</IonButton>
      <IonButton fill="clear">Action 2</IonButton>
    </IonCard>


<IonButton id="present-alert">Click Me</IonButton>
<IonAlert
  trigger="present-alert"
  header="Alert"
  subHeader="Important message"
  message="This is an alert!"
  buttons={['OK']}
></IonAlert>
</>
  )
}

export default SignInForm