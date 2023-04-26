import React from "react";
import './PetsSearch.css'

function PetSearch({ searchChange }) {
    return(
        <div>
            <div className="main-container">
                <input onChange={searchChange} className="input" type='search' placeholder="What do you want to search?"></input>
            </div>
        </div>
    )
}

export default PetSearch