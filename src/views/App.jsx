import React from 'react'
import ListUsers from './App/ListUsers'
import Navbar from './App/Navbar'
import UserMenu from './App/UserMenu'
import CreateUser from './App/CreateUser.jsx'

import "./css/App.css"
import './css/main.css';
import { useDispatch } from 'react-redux'
import { logout } from '../actions/auth'
import { clean } from '../actions/user'

const App = () => {
    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(clean());
        dispatch(logout());
    }

    return (
        <div className="app">
            <UserMenu />
            <div className="main">
                <Navbar />
                <CreateUser />
                <ListUsers />
                <button className="btn" onClick={handleLogout}>Logout</button>
            </div>
        </div>
    )
}

export default App
