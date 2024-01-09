import React, { useState, useEffect } from "react";
import './Mounts.css';
import Navbar from "../components/NavBar";
import MountSearch from "../components/Mounts/MountSearch";
import MountList from '../components/Mounts/MountList';

function Mounts({ accessToken }) {
    const [mounts, setMounts] = useState([]);
    const [searchfield, setSearchfield] = useState(''); // Fixed the typo here

    useEffect(() => {
        if (!accessToken) {
            return; // If access token is not available, do not proceed with the API call
        }

        // Fetching mount data from the Blizzard API using the provided access token
        fetch('https://us.api.blizzard.com/data/wow/mount/index?namespace=static-us&locale=en_US&access_token=' + accessToken)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Failed to fetch data');
            })
            .then(mountsData => {
                setMounts(mountsData.mounts || []);
                console.log(mountsData);
            })
            .catch(error => {
                console.error('Error fetching mount data:', error);
            });
    }, [accessToken]);

    const onSearchChange = (event) => {
        setSearchfield(event.target.value); // Using setSearchfield to update searchfield state
    };

    const filteredMounts = mounts.filter(mount => {
        return mount.name.toLowerCase().includes(searchfield.toLowerCase());
    });

    return (
        <div>
            <Navbar />
            <div>
                <MountSearch searchChange={onSearchChange} />
                <div>
                    <MountList mounts={filteredMounts} />
                </div>
            </div>
        </div>
    );
}

export default Mounts;
