import React from 'react'
import { Link } from 'react-router-dom'

import "./css/Navbar.css"

const Navbar = () => {
    return (
        <nav>
            <div className="nav-wrapper">
            <Link to="/app" className="brand-logo right"><img alt="name" className="photoMenu" src="https://randomuser.me/api/portraits/men/75.jpg"/></Link>
            </div>
        </nav>
    )
}

export default Navbar
