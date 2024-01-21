import React from "react";
import './Homepage.css';
import Navbar from "../components/NavBar";
import corgi from '../components/Images/molten-corgi.jpg';
import mount from '../components/Images/mount.jpg';
import Footer from "../components/Footer";
import petTab from '../components/Images/pets-tab.png';
import mountsTab from '../components/Images/mounts-tab.jpg';

function Homepage() {
    return (
        <div>
            <Navbar />

            <div className="text-center mt-4 border-primary bg-primary-subtle rounded shadow ">
                <h1 className="display-4 fw-bold mb-20 shadow">EXPLORE WORLD OF WARCRAFT'S BATTLE PET AND MOUNT COLLECTION!</h1>
            </div>

            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-md-6 mb-4 w-75 mt-4">
                        <a href="/pets/" className="tab-anchor text-decoration-none">
                            <div className="card text-center border-primary bg-primary-subtle shadow">
                                <img className="card-img-top w-100" src={corgi} alt="Pets" />
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">Pet Battles</h5>
                                    <p className="card-text">
                                        WoW Pet Battles are a new type of turn-based mini-game within World of Warcraft.
                                        Pet Battles allow players to raise their companions’ level (up to level 25),
                                        capture wild pets, and even battle other players' companions.
                                        <a href='/pets/' className="click-me fw-bold"> (Click Here to Explore Battle Pets.)</a>
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-md-6 mb-4 w-75">
                        <a href="/mounts/" className="tab-anchor text-decoration-none">
                            <div className="card text-center border-primary bg-primary-subtle shadow">
                                <img className="card-img-top" src={mount} alt="Mounts" />
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">Mounts</h5>
                                    <p className="card-text">
                                        Mounts are a much sought after form of transportation in which players ride atop
                                        the backs of various more or less exotic beasts (or machines).
                                        <a href="/mounts/" className="click-me fw-bold"> (Click Here to Explore Mounts.)</a>
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Homepage;
