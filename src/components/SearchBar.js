import React from "react";
import './SearchBar.css'

function SearchBar() {
    return(
        <div>
            <div className="main-container">
                <input className="input" type='search' placeholder="What do you want to search?"></input>
                <button className="button" type="submit">Go!</button>
            </div>
        </div>
    )   
}

export default SearchBar