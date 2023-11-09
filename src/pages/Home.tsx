import React, { useState, FC, useRef } from 'react';
import { IonContent, IonPage, IonButton, IonBadge, IonSegment, IonSegmentButton, IonLabel, IonIcon } from '@ionic/react';
import MenuItem from '../components/MenuItem'; // Stelle sicher, dass dies der richtige Importpfad ist
import menuData from '../menuData.json';
import { useShoppingCart } from '../contexts/ShoppingCartContext';
import { CartItem } from '../types/CartItem';
import { arrowBack, arrowForward } from 'ionicons/icons';
import { useHistory } from 'react-router-dom';



const Home: FC = () => {
  const { items, setItems } = useShoppingCart();
  const history = useHistory();
  const [selectedCategory, setSelectedCategory] = useState<string>(menuData[0].type);
  const [cartVisible, setCartVisible] = useState<boolean>(false);

  const categories = Array.from(new Set(menuData.map(item => item.type)));
  const categoryIndex = categories.indexOf(selectedCategory);

  const addToCart = (newItem: CartItem) => {
    setItems((currentItems) => {
      const itemIndex = currentItems.findIndex((item) => item.title === newItem.title);
      if (itemIndex !== -1) {
        // Update Quantity
        const updatedItems = [...currentItems];
        updatedItems[itemIndex].quantity += 1;
        return updatedItems;
      } else {
        // Add new Item
        return [...currentItems, newItem];
      }
    });
  };

  const scrollPrevious = () => {
    const prevIndex = categoryIndex > 0 ? categoryIndex - 1 : categories.length - 1;
    setSelectedCategory(categories[prevIndex]);
  };

  const scrollNext = () => {
    const nextIndex = categoryIndex < categories.length - 1 ? categoryIndex + 1 : 0;
    setSelectedCategory(categories[nextIndex]);
  };

  const cartItemCount = items.reduce((count, item) => count + item.quantity, 0);

  

  return (
    <IonPage>
    <div className="flex items-center"> {/* Füge margin-y hinzu, um Abstand nach oben und unten zu geben */}
        <IonButton fill="clear" onClick={scrollPrevious} > {/* Verringertes Padding */}
          <IonIcon icon={arrowBack} /> {/* Kleinere Icon-Größe */}
        </IonButton>
      
      <IonSegment
        value={selectedCategory}
        onIonChange={e => {
          const newValue = String(e.detail.value);
          setSelectedCategory(newValue);
      }}
        scrollable
      >
        {categories.map((category, index) => (
          <IonSegmentButton key={index} value={category} className={selectedCategory === category ? 'selected-category' : ''}>
            <IonLabel style={{ fontSize: '1.2em', padding: '8px 16px' }}>{category}</IonLabel>
          </IonSegmentButton>
        ))}
      </IonSegment>

      <IonButton fill="clear" onClick={scrollNext}>
        <IonIcon icon={arrowForward} />
      </IonButton>
    </div>

      <IonContent>
        {menuData
          .filter(item => item.type === selectedCategory)
          .map((item, index) => (
            <MenuItem
              key={index}
              item={{ ...item, quantity: 1 }}
              addToCart={addToCart}
            />
          ))
        }
      </IonContent>
      <IonButton
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
        }}
        onClick={() => history.push('/cart')}
      >
        🛒
        <IonBadge color="primary">{cartItemCount}</IonBadge>
      </IonButton>
      {/* Warenkorb-Overlay oder Modal hinzufügen, falls cartVisible true ist */}
    </IonPage>
  );
};

export default Home;
