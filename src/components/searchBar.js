import React, { useState, useEffect } from "react";
import { FaSearch } from 'react-icons/fa';
import "./searchBar.css";

const placeholders = [
    "Enter Dish Name...",
    "Search for recipes...",
    "What's cooking today?",
    "Find a delicious meal...",
    "Type a recipe name...",
    "Type name of yummy dish",
    "Feeling hungry?",
    "Enter name of yummy dish"
];

const SearchBar = ({setResults}) => {
    const [input, setInput] = useState("");
    const [placeholder, setPlaceholder] = useState("");

  
    useEffect(() => {
      const randomIndex = Math.floor(Math.random() * placeholders.length);
      setPlaceholder(placeholders[randomIndex]);
    }, []);
    
    const fetchData = (query) => {
        fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=d3e066f2&app_key=3458fa8a64d62c2af3e1ce595bac3d35`)
        .then((response) => response.json())
        .then((json) => {
            console.log(json.hits);
            const fetch_results = json.hits.filter((hit) => {
                return query && hit.recipe && hit.recipe.image
            });
            setResults(fetch_results);
        })
    };

    
    const handleChange = (value) => {
        setInput(value);
        fetchData(value);
    };

    return (
        <div className="input-container">
            <FaSearch id="searchIcon" onClick={() => alert("clicked search button")}/>
            <input
                placeholder={placeholder}
                onChange={(e) => handleChange(e.target.value) }
                value={input}
            />
        </div>
    );
};

export default SearchBar;
