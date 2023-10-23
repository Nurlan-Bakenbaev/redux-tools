

const RicipeItem = ( {recipe }) => {
  return (
    <>
      <div class>{recipe.name}</div>
      <button> add to favorites</button>
    </>
  );
};

export default RicipeItem;
