import React from "react";

import { actions } from "./your-favorites-slice"; 
import { useDispatch, useSelector } from "react-redux";

const RicipeItem = ({ recipe }) => {
  const state = useSelector((state) => state.favorites);
  console.log(state);
  const dispatch = useDispatch();
  return (
    <div className="bg-slate-700 p-4 ">
      <div>{recipe.name}</div>
      <button
        onClick={() => dispatch(action.toggleFavorites(recipe))}
        className="px-2 bg-green-500 rounded"
      >
      
        add to favorites
      </button>
    </div>
  );
};

export default RicipeItem;
