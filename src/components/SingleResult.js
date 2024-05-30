import React from 'react'
import "./SingleResult.css"
import { useNavigate } from 'react-router-dom'

const SingleResult = ({ result }) => {

  const navigate = useNavigate();

  const selectedRecipe = (dish) => {
    navigate(`/recipe/${dish}`);
  }


  return (
    <div
      className="singleSearch"
      onClick={() => selectedRecipe(result.recipe.label)}>
      {result.recipe.label}
    </div>
  )
}

export default SingleResult
