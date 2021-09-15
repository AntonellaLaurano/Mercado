import React from 'react'
import { useLocation } from 'react-router-dom'

import UsersList from './UsersList'
import Navbar from './Navbar';
import UserMenu from './UserMenu'
import CreateUser from './CreateUser'

import './css/Developer.css'
import '../css/main.css'
import MyProfile from '../../components/MyProfile'

const Developer = () => {
    const location = useLocation();
    
    
    return (
        <div className='developer'>
            <UserMenu />
            <Navbar />
            <div className='main'>
                {
                    {
                        '': <UsersList title='Todos los usuarios'/>,
                        '#perfil': <MyProfile />,
                        '#crearusuario': <CreateUser />,
                        '#desarrolladores': <UsersList title='Desarrolladores'/>,
                        '#administradores': <UsersList title='Administradores'/>,
                        '#propietarios': <UsersList title='Propietarios'/>,
                        '#clientes': <UsersList title='Clientes'/>,
                        '#deliveries': <UsersList title='Deliveries'/>
                    }[location.hash]
                }
            </div>
        </div>
    )
}

export default Developer
