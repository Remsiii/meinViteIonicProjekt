import React from 'react';

interface ArrowsProps {
  handleArrowClick: (direction: string) => void;
  direction: 'left' | 'right';
  selectedType: string; // Füge diese Zeile hinzu, wenn 'selectedType' benötigt wird.
}


const Arrows: React.FC<ArrowsProps> = ({ handleArrowClick, direction }) => {
  return (
    <button onClick={() => handleArrowClick(direction)} style={arrowStyle}>
      {direction === 'left' ? '<' : '>'}
    </button>
  );
};

const arrowStyle: React.CSSProperties = {
  fontSize: '18px',
  margin: '0 10px',
  color: '#000',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
};

export default Arrows;
