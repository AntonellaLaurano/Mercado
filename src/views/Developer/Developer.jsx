import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

import ListUsers from './ListUsers'
import Navbar from './Navbar';
import UserMenu from './UserMenu'
import CreateUser from './CreateUser'

import './css/Developer.css'
import '../css/main.css'
import MyProfile from '../../components/MyProfile';

const Developer = () => {
    const { seccion } = useParams();
    console.log(seccion)
    const location = useLocation()
    console.log('devloper')
    console.log(location)

    return (
        <div className="developer">
            <UserMenu /><Navbar />
            <div className="main">
                
                <CreateUser />
                {
                    seccion ? 
                        <MyProfile />
                    :
                        <ListUsers />
                }
                
            </div>
        </div>
    )
}

export default Developer
