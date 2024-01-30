import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./PetDetails.css";
import Navbar from "../components/NavBar";
import butt from "../components/Images/but-itch.gif";
import cat from "../components/Images/cat.gif";
import Footer from "../components/Footer";

function PetsDetails({ accessToken }) {
    const [petDetails, setPetDetails] = useState([]);
    const params = useParams();

    useEffect(() => {
        const petId = params.id;
        fetchPetDetails(petId);
    }, [params.id]);

    const fetchPetDetails = (petId) => {
        const PetDetailsURL = `https://us.api.blizzard.com/data/wow/pet/${petId}?namespace=static-us&locale=en_US&access_token=${accessToken}`;
        fetch(PetDetailsURL)
            .then((response) => response.json())
            .then((petItem) => setPetDetails(petItem));
    };

    if (petDetails.length === 0) {
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
                            <div className="card text-center border-blue-500 bg-white rounded-md shadow">
                                <img
                                    className="card-img-top w-10 mx-auto mt-2 mb-2"
                                    src={petDetails.icon}
                                    alt={petDetails.name}
                                />
                                <div className="card-body">
                                    <h5 className="card-title font-bold text-blue-500 flex items-center justify-center">
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
                                                    d="M9 5l7 7-7 7"
                                                />
                                            </svg>
                                        </span>
                                        Name: {petDetails.name}
                                    </h5>
                                    <p className="card-text font-bold text-blue-500 flex items-center justify-center">
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
                                                    d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
                                                />
                                            </svg>
                                        </span>
                                        Type: {petDetails.battle_pet_type.name}
                                    </p>
                                    <img
                                        className="card-img-bottom w-50 mx-auto mt-2 mb-2"
                                        src={butt}
                                        alt="Short Description"
                                        width="150px"
                                    />
                                    <h5 className="card-title font-bold text-blue-500 flex items-center justify-center">
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
                                        Short Description:
                                    </h5>
                                    <p className="card-text">{petDetails.description}</p>
                                    <h5 className="card-title font-bold text-blue-500 flex items-center justify-center">
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
                                        Abilities:
                                    </h5>
                                    <ul className="list-group list-group-flush">
                                        {petDetails.abilities.map((ability, index) => (
                                            <li
                                                key={index}
                                                className="border-blue-500 bg-white list-group-item"
                                            >
                                                {index + 1}. {ability.ability.name}
                                            </li>
                                        ))}
                                    </ul>
                                    <img
                                        className="card-img-bottom w-50 mx-auto mt-2 mb-2"
                                        src={cat}
                                        alt="Abilities Cat"
                                        width="80px"
                                    />
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

export default PetsDetails;
