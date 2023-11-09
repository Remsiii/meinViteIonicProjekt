import React from 'react';

interface MenuCardProps {
  title: string;
  description: string;
  price: number;
  addToCart: (item: { title: string; description: string; price: number, quantity: number }) => void;
}

const MenuCard: React.FC<MenuCardProps> = ({ title, description, price, addToCart }) => {

  const handlePress = () => {
    addToCart({ title, description, price, quantity: 1 });
  };

  return (
    <div onClick={handlePress} className="m-2 cursor-pointer">
      <div className="flex flex-row justify-between p-4 bg-white rounded-lg shadow-md">
        <div className="flex-grow">
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="mt-2 text-sm text-gray-500">{description}</p>
        </div>
        <div className="flex flex-col items-end justify-center">
          <span className="text-xl font-bold">{price.toFixed(2)}€</span>
          <button onClick={handlePress} className="w-8 h-8 mt-2 rounded-full bg-green-200 flex items-center justify-center">
            <span className="text-2xl text-green-600">+</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
