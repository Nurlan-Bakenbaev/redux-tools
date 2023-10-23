import React from "react";
import { MdFavorite } from "react-icons/Md";
import { GrFavorite } from "react-icons/Gr";
import { actions } from "./features/favoritesSlice";
import { useDispatch, useSelector } from "react-redux";

const RicipeItem = ({ recipe }) => {
  const state = useSelector((state) => state.favorites);
  console.log(state);
  const dispatch = useDispatch();
  const isFavorite = state.some((r) => r.id === recipe.id);
  return (
    <div className="bg-slate-700 p-4 ">
      <div>{recipe.name}</div>
      <button
        onClick={() => dispatch(actions.toggleFavorites(recipe))}
        className="px-2 bg-green-500 rounded"
      >
        {isFavorite ? (
          <span className="text-red-500">
            <MdFavorite />
          </span><span>Remove from</span>) : (
          <span className="text-blue-500">
            <MdFavorite /> 
          </span>
        )}{" "}
        favorites
      </button>
    </div>
  );
};

export default RicipeItem;
