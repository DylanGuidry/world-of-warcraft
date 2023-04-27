import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Navbar from '../components/NavBar'
import Footer from '../components/Footer'
import './PetDetails.css'
import dragon from '../components/Images/dragon.gif'
import horse from '../components/Images/swiftgloomhoof.gif'

function MountDetails() {
    const [mountDetails, setMountDetails] = useState([])
    const params = useParams()

    useEffect(() => {
        const mountid = params.id
        console.log(mountid)
        fetchMountFetch(mountid)
    }, [])

    const fetchMountFetch = (mountid) => {
        const MountDetailsURL = `https://us.api.blizzard.com/data/wow/mount/${mountid}?namespace=static-us&locale=en_US&access_token=USSWtcYeDoYM7br4y4jFAT1LD2C2Q2rW9n`
        fetch(MountDetailsURL)
        .then(response => response.json())
        .then(mountItem => setMountDetails(mountItem))
    }

    console.log(mountDetails)


    if(mountDetails.length === 0) {
        return(
            <h1>Loding</h1>
        )
    } else {
    return(
        <div>
            <div>
                <Navbar />
            </div>
            <div className="big">
                <div className="pet-detail-container">
                    <div>
                        <div className="name-and-icon">
                        <img src={dragon} width='50px'/>
                            <h1>Name: {mountDetails.name}</h1>
                        </div>
                    </div>
                    <div className="des-abilities">
                        <div>
                            <p className="description">
                                <h1>Short Description:</h1>
                                {mountDetails.description}
                            </p>
                        </div>
                        <div className="ability-contrainer">
                            <div className="abilities">
                                <h1>More Info :</h1>
                                <h1>Source: {mountDetails.source.name}</h1>
                                <h1>Faction: (if empty then there is no required faction.) {mountDetails?.faction?.name}</h1>
                                <img className="corgi-gif" src={horse}/>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}}

export default MountDetails