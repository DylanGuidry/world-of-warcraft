import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
import dragon from '../components/Images/dragon.gif';
import horse from '../components/Images/swiftgloomhoof.gif';

// ... (import statements remain unchanged)

function MountDetails({ accessToken }) {
    const [mountDetails, setMountDetails] = useState([]);
    const params = useParams();

    console.log('Access Token:', accessToken);

    useEffect(() => {
        const mountid = params.id;
        console.log(mountid);
        fetchMountDetails(mountid);
    }, [params.id]);

    const fetchMountDetails = (mountid) => {
        const MountDetailsURL = `https://us.api.blizzard.com/data/wow/mount/${mountid}?namespace=static-us&locale=en_US&access_token=${accessToken}`;
        fetch(MountDetailsURL)
            .then(response => response.json())
            .then(mountItem => setMountDetails(mountItem));
    };

    console.log(mountDetails);

    if (mountDetails.length === 0) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    } else {
        return (
            <div>
                <Navbar />
                <div className="container mx-auto mt-4">
                    <div className="flex justify-center">
                        <div className="w-full md:w-3/4 lg:w-2/3 xl:w-1/2 mb-4">
                            <div className="card text-center border-blue-500 bg-white rounded-md shadow p-4">
                                <img src={dragon} className="card-img-top mx-auto mt-2 mb-4 w-50" alt={mountDetails.name} />
                                <div className="card-body">
                                    <h5 className="card-title font-bold text-blue-500 flex items-center justify-center mb-4">
                                        <span className="mr-2">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                className="h-6 w-6"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M13 10V3L4 14h7v7l9-11h-7z"
                                                />
                                            </svg>
                                        </span>
                                        Name: {mountDetails.name}
                                    </h5>
                                    <p className="card-text font-bold text-blue-500 flex items-center justify-center mb-4">
                                        <span className="mr-2">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                className="h-6 w-6"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                                />
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M21 21a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a3 3 0 012-2.83"
                                                />
                                            </svg>
                                        </span>
                                        Short Description:
                                    </p>
                                    <p className="card-text mb-4">{mountDetails.description}</p>
                                    <h5 className="card-title font-bold text-blue-500 flex items-center justify-center mb-4">
                                        <span className="mr-2">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                className="h-6 w-6"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M13 10V3L4 14h7v7l9-11h-7z"
                                                />
                                            </svg>
                                        </span>
                                        More Info:
                                    </h5>
                                    <p className="font-bold text-blue-500 mb-4">Source: {mountDetails.source.name}</p>
                                    <p className="font-bold text-blue-500 mb-4">Faction: {mountDetails?.faction?.name || "None"}</p>
                                    <img className="corgi-gif mx-auto w-50" src={horse} alt="Corgi GIF" />
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
