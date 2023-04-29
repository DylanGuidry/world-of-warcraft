import React from "react";
import './Homepage.css'
import Navbar from "../components/NavBar";
import corgi from '../components/Images/molten-corgi.jpg'
import mount from '../components/Images/mount.jpg'
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import petTab from '../components/Images/pets-tab.png'
import mountsTab from '../components/Images/mounts-tab.jpg'

function Homepage() {
    return (
        <div>
            <div>
                <div>
                    <Navbar />
                    <div className="big-title-container">
                        <h1 className="big-title">EXPLORE WOLRD OF WARCRAFTS BATTLE PET AND MOUNT COLLECTION!</h1>
                    </div>
                    <div className="photo-tab">
                        <a href="/mounts/" className="tab-anchor">
                            <div className="photo-and-caption">
                                <img className="tabs" src={mountsTab}/>
                                <h1>Mounts</h1>
                            </div>
                        </a>
                        <a href="/pets/" className="tab-anchor">
                        <div className="photo-and-caption">
                            <img className="tabs" src={petTab}/>
                            <h1>Pets</h1>
                        </div>
                        </a>
                    </div>
                </div>
                <Carousel />
                <div className="tittle-and-image">
                    <div className="tittle">
                    WoW Pet Battles are a new type of turn-based mini-game within World of Warcraft. Pet Battles allow players to raise their companions’ level (up to level 25), capture wild pets, and even battle other players' companions.
                    <a href='/pets/' className="click-me"> (Click Here to Explore Battle Pets.)</a>
                    </div>
                    <div>
                        <img className="corgi" src={corgi}/>
                    </div>
                </div>
                <div className="tittle-and-image">
                    <div>
                        <img className="corgi" src={mount}/>
                    </div>
                    <div className="tittle">
                    Mounts are a much sought after form of transportation in which players ride atop the backs of various more or less exotic beasts (or machines). They can be accessed via the Mounts and Pets window. Warlocks, paladins and death knights can learn to summon mounts as a class perk. The Alliance Worgen have a race skill Running Wild that they will get at level 20. Druids can shape shift into multiple forms that improve their speed. Mounted travel is almost always faster than walking/running (some vanity mounts such as Sea Turtle provide no speed benefit on the ground). World of Warcraft: The Burning Crusade The Burning Crusade introduced flying mounts in select areas, which further increased the maximum possible player movement speed. World of Warcraft: Cataclysm Cataclysm opened up much of Azeroth to flying mounts.
                    <a href="/mounts/" className="click-me"> (Click Here to Explore Mounts.)</a>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Homepage

//5f0c436b930642a9a8a56a1fe265863b
//jATTCpGEUWj09QLDZWnMnTF6OuQxVdkW