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
  );
};

export default RicipeItem;
