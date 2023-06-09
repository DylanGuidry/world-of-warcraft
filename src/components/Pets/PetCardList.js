import React from "react";
import './PetCardList.css'
import darkgoat from '../Images/dark-goat.jpg'
import scout from '../Images/scout.jpg'
import shadow from '../Images/shadow.jpg'
import { NavLink } from "react-router-dom";

function PetCardList({ pets }) {
    return(
        <div>
            <div>
                <h1 className="title">Welcome To the Battle Pets Search Page</h1>
            </div>
                <div className="image-containers">
                    <img className="images" src={darkgoat}/>
                    <img className="images" src={scout}/>
                    <img className="images" src={shadow}/>
                </div>
            {pets.map((petItems) => {
                return(
                    <div className="main-result-container ">
                        <div className="results-container">
                            <NavLink className="nav-link" to={`/petsDetails/${petItems.id}`}>
                                <h1 className="results">{petItems.name}</h1>
                            </NavLink>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default PetCardList