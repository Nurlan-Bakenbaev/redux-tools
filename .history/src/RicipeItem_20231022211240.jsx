import React from 'react'

const RicipeItem = ({recipe}) => {
  return (
    <div>{recipe.name}</div>
    <button> add to </button>
  )
}

export default RicipeItem