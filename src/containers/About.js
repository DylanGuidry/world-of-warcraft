import React from "react";
import "./About.css";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import Zolo from "../components/Images/Zolo.jpg";
import horde from "../components/Images/forthehordegif.gif";

function About() {
    return (
        <div>
            <Navbar />
            <div className=" text-white pb-20">
                <div className="container mx-auto my-12 flex flex-col items-center">
                    <div className="w-50 h-40 mb-8 overflow-hidden rounded-lg border-4 border-white">
                        <img className="object-cover w-full h-full" src={Zolo} alt="Zolo" />
                    </div>
                    <div className="w-full bg-white p-8 rounded-lg shadow-lg text-gray-800">
                        <div className="flex items-center mb-4">
                            <img className="w-30 h-40 mb-8 overflow-hidden rounded-lg border-4 border-white" src={horde} alt="Horde" />
                            <h1 className="ml-4 text-2xl font-bold">MEET THE DEVELOPER</h1>
                        </div>
                        <p className="text-gray-700">
                            Dylan Guidry holds a Software Engineering Certification from DigitalCrafts. Since 2022, he has worked as a teaching assistant for DigitalCrafts, a full-stack coding bootcamp. As a graduate student, Dylan has worked on multiple projects such as an E-Commerce site named Oakbear, a Pokedex, and a National Parks Website.
                        </p>
                        <div className="mt-6 space-x-4">
                            <a
                                href="https://github.com/DylanGuidry"
                                className="text-blue-500 font-bold hover:underline"
                            >
                                GitHub
                            </a>
                            <a
                                href="https://www.dylanguidry.dev/"
                                className="text-blue-500 font-bold hover:underline"
                            >
                                Portfolio
                            </a>
                            <a
                                href="https://www.linkedin.com/in/dylan-guidry-853336215/"
                                className="text-blue-500 font-bold hover:underline"
                            >
                                LinkedIn
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default About;
