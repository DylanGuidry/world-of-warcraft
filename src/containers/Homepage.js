import React from "react";
import './Homepage.css'
import SearchBar from "../components/SearchBar";
import Navbar from "../components/NavBar";
import corgi from '../components/Images/molten-corgi.jpg'
import mount from '../components/Images/mount.jpg'
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";

function Homepage() {
    return (
        <div>
            <div>
                <div>
                    <Navbar />
                    <SearchBar />
                    <Carousel />
                </div>
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