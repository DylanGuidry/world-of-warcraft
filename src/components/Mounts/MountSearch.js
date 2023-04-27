import React from "react";
import './MountSearch.css'

//Taking in our searchChange function
function MountSearch({ searchChange }) {
    return(
        <div>
            <div className="main-container-input">
                <input onChange={searchChange} className="input" type='search' placeholder="What do you want to search?"></input>
            </div>
        </div>
    )
}

export default MountSearch