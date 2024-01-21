import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
import dragon from '../components/Images/dragon.gif';
import horse from '../components/Images/swiftgloomhoof.gif';

function MountDetails({ accessToken }) {
    const [mountDetails, setMountDetails] = useState([]);
    const params = useParams();

    console.log('Access Token:', accessToken);

    useEffect(() => {
        const mountid = params.id;
        console.log(mountid);
        fetchMountDetails(mountid);
    }, []);

    const fetchMountDetails = (mountid) => {
        const MountDetailsURL = (`https://us.api.blizzard.com/data/wow/mount/${mountid}?namespace=static-us&locale=en_US&access_token=` + accessToken);
        fetch(MountDetailsURL)
            .then(response => response.json())
            .then(mountItem => setMountDetails(mountItem));
    };

    console.log(mountDetails);

    if (mountDetails.length === 0) {
        return (
            <div className="spinner-grow text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        );
    } else {
        return (
            <div>
                <Navbar />
                <div className="container mt-4">
                    <div className="row justify-content-center">
                        <div className="col-md-8 mb-4">
                            <div className="card text-center border-primary bg-primary-subtle">
                                <img src={dragon} className="card-img-top mx-auto mt-2 mb-2 w-50" alt={mountDetails.name} />
                                <div className="card-body shadow">
                                    <div className="name-and-icon">
                                        <h5 className="card-title fw-bold">Name: {mountDetails.name}</h5>
                                    </div>
                                    <div className="des-abilities mt-2 mb-2">
                                        <p className="card-text mt-2 mb-2">
                                            <h5 className="fw-bold mt-2 mb-2">Short Description:</h5>
                                            {mountDetails.description}
                                        </p>
                                        <div className="ability-contrainer mt-2 mb-2">
                                            <div className="abilities">
                                                <h5 className="fw-bold mt-2 mb-2">More Info:</h5>
                                                <p className="fw-bold mt-2 mb-2">Source: {mountDetails.source.name}</p>
                                                <p className="fw-bold mt-2 mb-2 ">Faction: (if empty then there is no required faction.) {mountDetails?.faction?.name}</p>
                                                <img className="corgi-gif mx-auto w-50" src={horse} alt="Corgi GIF" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default MountDetails;
