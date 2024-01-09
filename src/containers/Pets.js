import React, {  useState, useEffect } from "react";
import './Pets.css'
import Navbar from "../components/NavBar";
import PetSearch from "../components/Pets/PetsSearch";
import PetCardList from '../components/Pets/PetCardList'

function Pets({ accessToken }) {
    const [pets, setPets] = useState([])
    const [searchfield, setsearchfield] = useState('')

    useEffect(() => {
        if (!accessToken) {
            return; // If access token is not available, do not proceed with the API call
        }

        // Fetching mount data from the Blizzard API using the provided access token
        fetch('https://us.api.blizzard.com/data/wow/pet/index?namespace=static-us&locale=en_US&access_token=' + accessToken)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Failed to fetch data');
            })
            .then(mountsData => {
                setPets(mountsData.pets || []);
                console.log(mountsData);
            })
            .catch(error => {
                console.error('Error fetching mount data:', error);
            });
    }, [accessToken]);

    const onSearchChange = (event) => {
        //Chaning the state based on the targeted value in the searchbox
        setsearchfield(event.target.value)
    }

    const filteredPets = pets.filter(pets => {
        //If anything includes what is in the input string then return it from the DB
        return pets.name.toLocaleLowerCase().includes(searchfield.toLocaleLowerCase())
    })
    return(
        <div>
            <div>
                <Navbar />
            </div>
                <PetSearch searchChange={onSearchChange}/>
            <div>
                <PetCardList pets={filteredPets}/>
            </div>
        </div>
    )
}

export default Pets