import React, { useState, useEffect } from "react";
import './Pets.css';
import Navbar from "../components/NavBar";
import PetSearch from "../components/Pets/PetsSearch";
import PetCardList from '../components/Pets/PetCardList';

function Pets({ accessToken }) {
    const [pets, setPets] = useState([]);
    const [searchfield, setSearchfield] = useState('');

    useEffect(() => {
        if (!accessToken) {
            return; // If access token is not available, do not proceed with the API call
        }

        // Fetching pet data from the Blizzard API using the provided access token
        fetch('https://us.api.blizzard.com/data/wow/pet/index?namespace=static-us&locale=en_US&access_token=' + accessToken)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Failed to fetch data');
            })
            .then(petsData => {
                setPets(petsData.pets || []);
                console.log(petsData);
            })
            .catch(error => {
                console.error('Error fetching pet data:', error);
            });
    }, [accessToken]);

    const onSearchChange = (event) => {
        // Changing the state based on the targeted value in the search box
        setSearchfield(event.target.value);
    };

    const filteredPets = pets.filter(pet => {
        // If anything includes what is in the input string then return it from the DB
        return pet.name.toLocaleLowerCase().includes(searchfield.toLocaleLowerCase());
    });

    return (
        <div>
            <Navbar />
            <div className="container mt-4">
                <PetSearch searchChange={onSearchChange} />
                <div className="row justify-content-center">
                    <div className="col-md-8 mb-4">
                        <PetCardList pets={filteredPets} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pets;
