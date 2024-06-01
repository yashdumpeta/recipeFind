import React from 'react'
import "./SingleResult.css"
import { useNavigate } from 'react-router-dom'

const SingleResult = ({ result }) => {

  const navigate = useNavigate();

  const selectedRecipe = (dishInfo) => {
    navigate(`/recipe/${dishInfo.label}`, {state: {dishInfo}});
  }


  return (
    <div
      className="singleSearch"
      onClick={() => selectedRecipe(result.recipe)}>
      {result.recipe.label}
    </div>
  )
}

export default SingleResult
