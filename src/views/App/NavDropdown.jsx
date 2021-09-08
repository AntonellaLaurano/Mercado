import React from 'react'
import { useDispatch } from 'react-redux';
import { logout } from '../../actions/auth';
import { clean } from '../../actions/user';

const Dropdown = () => {
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
        dispatch(clean());
    }

    return (
        <ul id="dropdown" className="dropdown-content">
            <li><span onClick={handleLogout}>Logout</span></li>
        </ul>
    )
}

export default Dropdown
