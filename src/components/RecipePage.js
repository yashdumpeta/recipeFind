import React from 'react'
import { useParams} from 'react-router-dom'
import './RecipePage.css'
import { useLocation } from 'react-router-dom'
import TypewriterComponent from 'typewriter-effect'
import { useState } from 'react'


const RecipePage = () => {


    const { dishInfo } = useParams();
    const { state } = useLocation();
    const recipe = state?.recipe;

    const [showNutrition, setShowNutrition] = useState(false);

    const toggleNutritionalInfo = () => {
        setShowNutrition(!showNutrition);
    };

    

    if (!recipe) {

        return (
            <div>
                <header className="header">
                    <h1>RecipeFind</h1>
                </header>
                <header className="header">
                    <p>
                        <TypewriterComponent
                            options={{
                                autoStart: true,
                                loop: true,
                                delay: 150,
                                cursor: "",
                                strings: ['Loading...']
                            }}
                        />
                    </p>
                </header>
            </div>
        );
    }
    
    return (
        <div>
            <header className="header">
                <h1>RecipeFind</h1>
            </header>
            <div className="dishName">
                <h1>{dishInfo}</h1>
            </div>
            <div className="dish_image">
                <img src={recipe.images.regular.url} alt={recipe.label} />
            </div>
            <div className="additionalInfo">
                <h3>Calories: {recipe.calories} </h3>
                <button className="nutrition_button" onClick={toggleNutritionalInfo}>View Nutritional Information</button>
                {showNutrition && (
                    <ul className="nutritionalInfo">
                        {recipe.digest.map((nutrient, index) => (
                            <li key={index}>{nutrient.label}: {nutrient.total}{nutrient.unit}</li>
                        ))}
                    </ul>
                )}
            </div>
            <div className="ingredients">
                <h3>Ingredients: </h3>
                <ul>
                    {recipe.ingredientLines.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))}
                </ul>
            </div>




        </div>
    )
}

export default RecipePage
