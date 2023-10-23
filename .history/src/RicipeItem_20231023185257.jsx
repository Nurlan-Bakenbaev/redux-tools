import React from "react";
import { MdFavorite } from "react-icons/Md";
import { GrFavorite } from "react-icons/Gr";
import { actions } from "./features/favoritesSlice";
import { useDispatch, useSelector } from "react-redux";

const RicipeItem = ({ recipe }) => {
  const state = useSelector((state) => state.favorites);
  console.log(state.length);
  const dispatch = useDispatch();
  const isFavorite = state.some((r) => r.id === recipe.id);
  return (
    <div>
<h1> </h1>
    <div className="bg-slate-700 p-4 ">
      <div>{recipe.name}</div>
      <button
        onClick={() => dispatch(actions.toggleFavorites(recipe))}
        className="px-2 bg-green-500 rounded"
      >
        {isFavorite ? (
          <>
            <span className="text-red-500">
              <MdFavorite />
            </span>{" "}
            Remove from
          </>
        ) : (
          <>
            <span className="text-blue-500">
              <MdFavorite />
            </span>
            Add to
          </>
        )}
        favorites
      </button>
    </div>
    </div>
  );
};

export default RicipeItem;
