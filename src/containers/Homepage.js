import React from "react";
import "./Homepage.css";
import Navbar from "../components/NavBar";
import corgi from "../components/Images/molten-corgi.jpg";
import mount from "../components/Images/mount.jpg";
import Footer from "../components/Footer";

function Homepage() {
    return (
        <div>
            <Navbar />
            <div className="text-center my-8 p-6 bg-blue-500 rounded-lg shadow-md max-w-[1000px] mx-auto text-white">
                <h1 className="text-5xl font-bold mb-4">
                    Embark on a Journey through Azeroth's Pet and Mount Collection!
                </h1>
                <p className="text-lg">
                    Discover the wonders of World of Warcraft as you delve into epic pet
                    battles and ride majestic mounts.
                </p>
            </div>

            <div className="container mx-auto mt-8">
                <div className="flex justify-center">
                    <div className="w-full sm:w-[1000px] mb-4">
                        <a href="/pets/" className="block tab-anchor text-decoration-none">
                            <div className="max-w-full bg-white border border-gray-200 rounded-lg shadow">
                                <img className="rounded-t-lg w-full" src={corgi} alt="Pets" />
                                <div className="p-5">
                                    <a href="/pets/" className="block tab-anchor text-decoration-none">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                                            Pet Battles
                                        </h5>
                                    </a>
                                    <p className="mb-3 font-normal text-gray-700">
                                        WoW Pet Battles are a new type of turn-based mini-game within
                                        World of Warcraft. Pet Battles allow players to raise their
                                        companions’ level (up to level 25), capture wild pets, and even
                                        battle other players' companions.
                                        <a href="/pets/" className="text-blue-500 font-bold">
                                            {" "}
                                            (Click Here to Explore Battle Pets.)
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="flex justify-center">
                    <div className="w-full sm:w-[1000px] mb-4">
                        <a href="/mounts/" className="block tab-anchor text-decoration-none">
                            <div className="max-w-full bg-white border border-gray-200 rounded-lg shadow">
                                <img className="rounded-t-lg w-full" src={mount} alt="Mounts" />
                                <div className="p-5">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                                        Mounts
                                    </h5>
                                    <p className="mb-3 font-normal text-gray-700">
                                        Mounts are a much sought after form of transportation in
                                        which players ride atop the backs of various more or less
                                        exotic beasts (or machines).
                                        <a href="/mounts/" className="text-blue-500 font-bold">
                                            {" "}
                                            (Click Here to Explore Mounts.)
                                        </a>
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
