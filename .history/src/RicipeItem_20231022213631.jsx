

const RicipeItem = ({ recipe ) => {
  return (
    <>
      <div>{recipe.name}</div>
      <button> add to favorites</button>
    </>
  );
};

export default RicipeItem;
