import React from 'react';
import ListUsers from './App/ListUsers';
import Navbar from './App/Navbar';
import UserMenu from './App/UserMenu';
import CreateUser from './App/CreateUser';

import "./css/App.css";
import './css/main.css';

const App = () => {
    return (
        <div className="app">
            <UserMenu />
            <div className="main">
                <Navbar />
                <CreateUser />
                <ListUsers />
            </div>
        </div>
    )
}

export default App
