import React from "react";
import { useSelector } from "react-redux";

const RicipeItem = ({ recipe }) => {
  useSelector
  return (
    <div className="bg-slate-700 p-4 ">
      <div>{recipe.name}</div>
      <button className="px-2 bg-green-500 rounded"> add to favorites</button>
    </div>
  );
};

export default RicipeItem;
