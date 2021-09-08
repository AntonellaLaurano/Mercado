import React from 'react'
import { useSelector } from 'react-redux'

import M from 'materialize-css'

import "./css/UserMenu.css"

const UserMenu = () => {
    
    const firstname = useSelector(state => state.auth.details.firstname);
    const lastname = useSelector(state => state.auth.details.lastname);
    const email = useSelector(state => state.auth.details.email);
    const role = useSelector(state => state.auth.details.role);

    const handleAdd = () => {
        var elems = document.querySelectorAll('.modal');
        M.Modal.init(elems);
    }

    return (
            <ul id="slide-out" className="sidenav">
                <li>
                    <div className="avatar">
                        <img alt="" className="circle photoMenu" src="https://randomuser.me/api/portraits/men/75.jpg" />
                        <h6 className="white-text name">{`${firstname} ${lastname}`}</h6>
                        <h6 className="white-text role">{role}</h6>
                        <h6 className="white-text email">{email}</h6>
                    </div>
                </li>
                <li><a href="#modalC" className="waves-effect waves-light modal-trigger sidenav-close" onClick={handleAdd}>New User</a></li>
                <li><div className="divider"></div></li>
            </ul>

            
    )
}

export default UserMenu;
