import React from "react";
import './About.css'
import Navbar from '../components/NavBar'
import Footer from '../components/Footer'
import Zolo from '../components/Images/Zolo.jpg'
import horde from '../components/Images/forthehordegif.gif'

function About() {
    return(
        <div>
            <div>
                <Navbar />
            </div>
            <div>
            <div className='overall-container'>
                <div className='about-us-container'>
                    <div><img className='Portrait' src={Zolo} /></div>
                </div>
                <div className='about-us-des'>
                    <div>
                    <img className="horde-image" src={horde} width='400px'/>
                        <h1 className ='meeting-the-dev'>MEETING THE DEVELOPER</h1>
                    </div>
                    <div className='all-about-dev'>
                        Dylan Guidry holds a Software Engineering Certification from DigitalCrafts. Since 2022, he has worked as a teaching assistant for DigitalCrafts, a full-stack coding bootcamp.
                        As a graduate student, Dylan has worked on multiple projects such as an E-Commerce site named Oakbear, a Pokedex, and a National Parks Website.
                    </div>
                    <div className='link-box'>
                        <div className='Linked-ones'>
                            <a href="https://github.com/DylanGuidry">GitHub</a>
                        </div>
                        <div className='Linked-ones'>
                        <a href="https://www.dylanguidry.dev/">Portfolio</a>
                        </div>
                        <div className='Linked-ones'>
                        <a href="https://www.linkedin.com/in/dylan-guidry-853336215/">LinkedIn</a>
                        </div>
                    </div>
                    
                </div>
            </div>
        <Footer />
        </div>
        </div>
    )
}

export default About