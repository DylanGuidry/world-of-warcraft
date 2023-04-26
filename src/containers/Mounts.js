import React, {  useState, useEffect } from "react";
import './Mounts.css'
import Navbar from "../components/NavBar";
import MountSearch from "../components/Mounts/MountSearch";
import MountList from '../components/Mounts/MountList'

function Mounts() {
    const [mounts, setMounts] = useState([])
    const [searchfield, setsearchfield] = useState('')

    useEffect(() => {
        //Fetching an API (data)
        fetch('https://us.api.blizzard.com/data/wow/mount/index?namespace=static-us&locale=en_US&access_token=USSWtcYeDoYM7br4y4jFAT1LD2C2Q2rW9n')
        //Converting that data into readable json
        .then(response =>  response.json())
        //Setting the state to the user data that is returned by the API
        .then(mounts => {
            setMounts(mounts.mounts)
        })
    }, [])

    const onSearchChange = (event) => {
        //Chaning the state based on the targeted value in the searchbox
        setsearchfield(event.target.value)
    }

    const filteredMounts = mounts.filter(mounts => {
        //If anything includes what is in the input string then return it from the DB
        return mounts.name.toLocaleLowerCase().includes(searchfield.toLocaleLowerCase())
    })

    return(
        <div>
            <Navbar />
            <div>
            <MountSearch searchChange={onSearchChange}/>
            <div>
                <MountList mounts={filteredMounts}/>
            </div>
            </div>
        </div>
    )
}

export default Mounts