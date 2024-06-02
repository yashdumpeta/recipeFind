import React from 'react';
import { useParams } from 'react-router-dom';
import './RecipePage.css';
import { useLocation } from 'react-router-dom';
import TypewriterComponent from 'typewriter-effect';
import { useState } from 'react';

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
                    <TypewriterComponent
                        options={{
                            autoStart: true,
                            loop: true,
                            delay: 150,
                            cursor: "",
                            strings: ['Loading...']
                        }}
                    />
                </header>
            </div>
        );
    }

    const getImageUrl = () => {
        if (recipe.images.REGULAR && recipe.images.REGULAR.url) {
            return recipe.images.REGULAR.url;
        }
        else if (recipe.images.SMALL && recipe.images.SMALL.url) {
            return recipe.images.SMALL.url;
        }
        else if (recipe.images.THUMBNAIL && recipe.images.THUMBNAIL.url) {
            return recipe.images.THUMBNAIL.url;
        }
        else if (recipe.images.LARGE && recipe.images.LARGE.url) {
            return recipe.images.LARGE.url;
        }
        else {
            return '';
        }
    };

    const recipeImageUrl = getImageUrl();

    return (
        <div>
            <header className="header">
                <h1>RecipeFind</h1>
            </header>
            <div className="dishName">
                <h1>{dishInfo}</h1>
            </div>
            <div className="dish_image">
                {recipeImageUrl && <img src={recipeImageUrl} alt={recipe.label} />}
            </div>
            <div className="additionalInfo">
                <h3 className="calorieCount">{Math.round(recipe.calories)} cals</h3>
                <button className="nutrition_button" onClick={toggleNutritionalInfo}>View Nutritional Information</button>
                {showNutrition && (
                    <ul className="nutritionalInfo">
                        {recipe.digest.map((nutrient, index) => (
                            <li key={index}>{nutrient.label}: {Math.round(nutrient.total)} {nutrient.unit}</li>
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
    );
};

export default RecipePage;