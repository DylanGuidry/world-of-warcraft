import React from "react";
import './MountList.css'
import snail from '../Images/snail-mount.jpg'
import multi from '../Images/muli-mount.jpg'
import mount from '../Images/otter.jpg'

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
                            <h1 className="results">{mountItems.name}</h1>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default MountList