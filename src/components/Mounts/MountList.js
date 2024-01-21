import React from "react";
import { NavLink } from "react-router-dom";
import './MountList.css';

function MountList({ mounts }) {
    return (
        <div>
            <div className="container mt-4">
                <h1 className="title">Welcome To the Mounts Search Page</h1>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                    {mounts.map((mountItems, index) => (
                        <div key={index} className="col">
                            <div className="card h-100">
                                <div className="card-body">
                                    <NavLink className="nav-link" to={`/mountDetails/${mountItems.id}`}>
                                        <h5 className="card-title fw-bold" style={{ color: 'black' }}>{mountItems.name}</h5>
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

export default MountList;
