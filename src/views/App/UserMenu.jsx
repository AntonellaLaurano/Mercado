import React from 'react'
import { useSelector } from 'react-redux'

import "./css/UserMenu.css"

const UserMenu = () => {
    
    const firstname = useSelector(state => state.auth.details.firstname);
    const lastname = useSelector(state => state.auth.details.lastname);
    const role = useSelector(state => state.auth.details.role)

    return (
        <div className="UserMenu">
            <div className="avatar">
                <img alt="name" className="photo" src="https://randomuser.me/api/portraits/men/75.jpg"/>
                <div className="name">
                    <h5>{firstname}</h5>
                    <h5>{lastname}</h5>
                    <h6>{role}</h6>
                </div>
            </div>
        </div>
    )
}

export default UserMenu;
