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

    const visitRecipe = () => {
        console.log("Visiting recipe URL:", recipe.url);
        window.location.href = recipe.url;
    };


    if (!recipe) {
        return (
            <div className="landingPage">
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
        if (recipe.images.LARGE && recipe.images.LARGE.url) {
            return recipe.images.LARGE.url;
        }
        else if (recipe.images.REGULAR && recipe.images.REGULAR.url) {
            return recipe.images.REGULAR.url;
        }
        else if (recipe.images.SMALL && recipe.images.SMALL.url) {
            return recipe.images.SMALL.url;
        }
        else if (recipe.images.THUMBNAIL && recipe.images.THUMBNAIL.url) {
            return recipe.images.THUMBNAIL.url;
        }
        else {
            return '';
        }
    };

    const recipeImageUrl = getImageUrl();

    <button className="absentRecipe" onClick={() => visitRecipe()}>View Recipe</button>

    const getInstructions = () => {
        if (!recipe.instructions) {
            return (
                <button className="absentRecipe" onClick={() => visitRecipe()}> View Recipe </button>
            );
        }
        else {
            return (
                <ul>
                    {recipe.instructions.map((step, index) => (
                        <li key={index}>{step} </li>
                    ))}
                </ul>
            );
        }
    }

    const cookingInstructions = getInstructions();


    return (
        <div className="landingPage">
            <header className="header">
                <h1>RecipeFind</h1>
            </header>
            <div className="dish_image">
                {recipeImageUrl && <img src={recipeImageUrl} alt={recipe.label} />}
            </div>
            <div className="dishName">
                <h1>{dishInfo}</h1>
            </div>
            <div className="dishSource">
                <h3>Recipe provided by {recipe.source}</h3>
            </div>
            <div className="additionalInfo">
                <div>
                    <h3 className="numServings">{recipe.yield} servings</h3>
                    <hr className="divider" />
                    <h3 className="calorieCount">{Math.round(recipe.calories)} cals</h3>
                    <hr className="divider" />
                    <div className="button-container">
                        <button className="nutrition_button" onClick={toggleNutritionalInfo}>
                            View Nutritional Information
                        </button>
                    </div>

                </div>
                {showNutrition && (
                    <div className="nutritionalInfoContainer">
                        <table>
                            <thead>
                                <tr>
                                    <th colSpan="3">Nutritional Analysis</th>
                                    <th>Per Serving</th>
                                </tr>
                                <tr>
                                    <th>Serving Size</th>
                                    <td colSpan="3">{`1 of ${recipe.yield} servings`}</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>Calories</th>
                                    <td>{Math.round(recipe.calories)}</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                {recipe.digest.map((nutrient, index) => (
                                    <tr key={index}>
                                        <th>{nutrient.label}</th>
                                        <td>{Math.round(nutrient.total)}</td>
                                        <td>{nutrient.unit}</td>
                                        <td></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
            <div className="mainInfo">
                <div className="ingredients">
                    <h3>Ingredients</h3>
                    <ul>
                        {recipe.ingredientLines.map((ingredient, index) => (
                            <li key={index}>{ingredient} </li>
                        ))}
                    </ul>
                </div>
                <hr className="divider-main" />
                <div className="instructions">
                    <h3>Cooking Instructions</h3>
                    {cookingInstructions}
                </div>
            </div>
        </div>
    );
};

export default RecipePage;