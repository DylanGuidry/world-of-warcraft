import React from "react";
import './NavBar.css'
import wow from './Images/world-of-warcraft.png'
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap CSS

function Navbar() {
    return (
        <div>
            <nav class="navbar bg-body-tertiary shadow">
                <div class="container">
                    <a class="navbar-brand" href="/">
                        <svg href="/" xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                    </a>
                    <a class="navbar-brand" href="">
                        <img src={wow} alt="Bootstrap" width="52" height="24" />
                    </a>
                    <a class="navbar-brand" href="/about">
                        <svg href="/about" xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-info"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
                    </a>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
