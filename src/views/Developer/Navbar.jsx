import React, { useEffect } from 'react'
import M from 'materialize-css'

import NavDropdown from './NavDropdown'

import './css/Navbar.css'

const Navbar = () => {
    const handleSidenav = () => {
        var elems = document.querySelectorAll('.sidenav');
        M.Sidenav.init(elems);
    }

    useEffect(() => {
        var elems2 = document.querySelectorAll('.dropdown-trigger');
        M.Dropdown.init(elems2, {inDuration: 300, outDuration: 300, hover: true, closeOnClick:  false, coverTrigger: false});
    }, [])


    return (
        <nav>
            <div className='nav-wrapper'>
                <div onClick={handleSidenav} data-target='slide-out' className='sidenav-trigger'><i className='material-icons'>dehaze</i></div>
                <img alt='' data-target='dropdown' className='brand-logo right dropdown-trigger circle photoDropdown' src='https://randomuser.me/api/portraits/men/75.jpg'/>
                <NavDropdown />
            </div>
        </nav>
    )
}

export default Navbar;
