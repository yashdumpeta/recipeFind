import React from 'react'
import { useParams } from 'react-router-dom'
import './RecipePage.css'

const RecipePage = () => {


    const { dish } = useParams();



    return (
        <div>
            <header className="header">
                <h1>RecipeFind</h1>
            </header>
            <div className="dishName">
                <h1>{dish}</h1>
            </div>

        </div>
    )
}

export default RecipePage
