import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import './PetDetails.css'
import Navbar from '../components/NavBar'
import butt from '../components/Images/but-itch.gif'
import cat from '../components/Images/cat.gif'
import Footer from '../components/Footer'

function PetsDetails({ accessToken }) {
    const [petDetails, setPetDetails] = useState([])
    const params = useParams()

    useEffect(() => {
        const petId = params.id
        console.log(petId)
        fetchPetDetails(petId)
    }, [])

    const fetchPetDetails = (petId) => {
        const PetDetailsURL = (`https://us.api.blizzard.com/data/wow/pet/${petId}?namespace=static-us&locale=en_US&access_token=` + accessToken)
        fetch(PetDetailsURL)
            .then(response => response.json())
            .then(petItem => setPetDetails(petItem))
    }

    console.log(petDetails)

    if (petDetails.length === 0) {
        return (
            <div class="spinner-grow text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        )
    } else {
        return (
            <div>
                <Navbar />

                <div className="container mt-4">
                    <div className="row justify-content-center">
                        <div className="col-md-8 mb-4">
                            <div className="card text-center border-primary bg-primary-subtle">
                                <img className="card-img-top w-10 mx-auto mt-2 mb-2" src={petDetails.icon} alt={petDetails.name} />
                                <div className="card-body shadow">
                                    <h5 className="card-title fw-bold">Name: {petDetails.name}</h5>
                                    <p className="card-text fw-bold">Type: {petDetails.battle_pet_type.name}</p>
                                    <img className="card-img-bottom w-50 mx-auto mt-2 mb-2" src={butt} alt="Short Description" width='150px' />
                                    <h5 className="card-title fw-bold">Short Description:</h5>
                                    <p className="card-text">{petDetails.description}</p>
                                    <h5 className="card-title fw-bold">Abilities:</h5>
                                    <ul className="list-group list-group-flush">
                                        {petDetails.abilities.map((ability, index) => (
                                            <li key={index} className="border-primary bg-primary-subtle list-group-item">{index + 1}. {ability.ability.name}</li>
                                        ))}
                                    </ul>
                                    <img className="card-img-bottom w-50 mx-auto mt-2 mb-2" src={cat} alt="Abilities Cat" width='80px' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        )
    }
}

export default PetsDetails;
