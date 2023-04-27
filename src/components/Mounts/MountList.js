import React from "react";
import { NavLink } from "react-router-dom";
import './MountList.css'
import snail from '../Images/snail-mount.jpg'
import multi from '../Images/muli-mount.jpg'
import mount from '../Images/otter.jpg'

//We are passing mount from our App.js to access the props
function MountList({ mounts }) {
    return(
        <div>
            <div>
                <h1 className="title">Welcome To the Mounts Search Page</h1>
            </div>
                <div className="image-containers">
                    <img className="images" src={snail}/>
                    <img className="images" src={multi}/>
                    <img className="images" src={mount}/>
                </div>
            {mounts.map((mountItems) => {
                return(
                    <div className="main-result-container ">
                        <div className="results-container">
                            {/* NavLink to link to the specific ID from our api call */}
                            <NavLink className="nav-link" to={`/mountDetails/${mountItems.id}`}>
                            <h1 className="results">{mountItems.name}</h1>
                            </NavLink>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default MountList