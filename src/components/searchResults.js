import React from "react";
import "./searchResults.css"
import SingleResult from "./SingleResult";


const SearchResults = ({ results }) => {


    return (
        <div className="search_results">
            {
                results.map((result, index) => {
                    return (
                        <SingleResult result={result} key={index}/>
                    );
                })
            }
        </div>
    );
}

export default SearchResults;