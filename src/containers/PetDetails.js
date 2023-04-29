import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import './PetDetails.css'
import Navbar from '../components/NavBar'
import butt from '../components/Images/but-itch.gif'
import cat from '../components/Images/cat.gif'
import Footer from '../components/Footer'

function PetsDetails() {
    const [petDetails, setpetDetails] = useState([])
    const params = useParams()

    useEffect(() => {
        const petid = params.id
        console.log(petid)
        fetchPetDetails(petid)
    }, [])

    const fetchPetDetails = (petid) => {
        const PetDetailsURL = `https://us.api.blizzard.com/data/wow/pet/${petid}?namespace=static-us&locale=en_US&access_token=USmdhBF4kA1xb3B0QVvPLSX5OlkTAr5Of4`
        fetch(PetDetailsURL)
        .then(response => response.json())
        .then(petItem => setpetDetails(petItem))
    }

    console.log(petDetails)

    if(petDetails.length === 0) {
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
                            <img className="icon-pet" src={petDetails.icon}/>
                            <h1>Name: {petDetails.name}</h1>
                            <h1>Type: {petDetails.battle_pet_type.name}</h1>
                        </div>
                    </div>
                    <div className="des-abilities">
                        <div>
                            <p className="description">
                            <img className="corgi-gif" src={butt}/>
                                <h1>Short Description:</h1>
                                {petDetails.description}
                            </p>
                        </div>
                        <div className="ability-contrainer">
                            <div className="abilities">
                                <h1>abilities:</h1>
                                <h1>1. {petDetails.abilities[0].ability.name}</h1>
                                <h1>2. {petDetails.abilities[1].ability.name}</h1>
                                <h1>3. {petDetails.abilities[2].ability.name}</h1>
                                <h1>4. {petDetails.abilities[3].ability.name}</h1>
                                <h1>5. {petDetails.abilities[4].ability.name}</h1>
                                <h1>6. {petDetails.abilities[5].ability.name}</h1>
                                <img className="cat" src={cat} width='80px'/>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}}

export default PetsDetails