import React from "react";
import './PetCardList.css';
import { NavLink } from "react-router-dom";

function PetCardList({ pets }) {
    return (
        <div>
            <div className="container mt-4">
                <h1 className="title">Welcome To the Battle Pets Search Page</h1>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                    {pets.map((petItems, index) => (
                        <div key={index} className="col">
                            <div className="card h-100">
                                <div className="card-body">
                                    <NavLink className="nav-link" to={`/petsDetails/${petItems.id}`}>
                                        <h5 className="card-title fw-bold" style={{ color: 'black' }}>{petItems.name}</h5>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default PetCardList;
