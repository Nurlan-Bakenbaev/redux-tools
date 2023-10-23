import React from 'react';

const RicipeItem = ( {recipe }) => {
  return (
    <div>
      <div>{recipe.name}</div>
      <button> add to favorites</button>
    </div>
  );
};

export default RicipeItem;
