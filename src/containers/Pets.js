import React, {  useState, useEffect } from "react";
import './Pets.css'
import Navbar from "../components/NavBar";
import PetSearch from "../components/Pets/PetsSearch";
import PetCardList from '../components/Pets/PetCardList'

function Pets() {
    const [pets, setPets] = useState([])
    const [searchfield, setsearchfield] = useState('')

    useEffect(() => {
        //Fetching an API (data)
        fetch('https://us.api.blizzard.com/data/wow/pet/index?namespace=static-us&locale=en_US&access_token=USmdhBF4kA1xb3B0QVvPLSX5OlkTAr5Of4')
        //Converting that data into readable json
        .then(response =>  response.json())
        //Setting the state to the user data that is returned by the API
        .then(pets => {
            setPets(pets.pets)
        })
    }, [])

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