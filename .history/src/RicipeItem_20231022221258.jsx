import React from 'react';

const RicipeItem = ( {recipe }) => {
  return (
    <div className='bg-slate-500'>
      <div>{recipe.name}</div>
      <button> add to favorites</button>
    </div>
  );
};

export default RicipeItem;
