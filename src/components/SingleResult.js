import React from 'react'
import "./SingleResult.css"

const SingleResult = ({ result }) => {

  const selectedRecipe = (dish) => {
    alert("selected this dish :" + dish)
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
