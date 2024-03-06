import React, { useState } from 'react';
import FruitCard from './fruitCard';

function FruitCardContainer() {
  const [totalCount, setTotalCount] = useState(0);

  const handleCountChange = (change) => {
    setTotalCount(totalCount + change);
  };

  return (
    <div>
      <p>Total Count: {totalCount}</p>
      {[...Array(6)].map((_, index) => (
        <FruitCard key={index} fruit={{ name: `Fruit ${index + 1}` }} onChange={handleCountChange} />
      ))}
    </div>
  );
}

export default FruitCardContainer;
