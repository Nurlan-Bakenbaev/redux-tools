import React from "react";

const RicipeItem = ({ recipe }) => {
  return (
    <div className="bg-slate-700 ">
      <div>{recipe.name}</div>
      <button className="px-2 bg-green-500 rounded"> add to favorites</button>
    </div>
  );
};

export default RicipeItem;
