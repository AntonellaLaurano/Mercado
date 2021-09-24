import React from 'react'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { idGetUser } from '../../redux/actions/user';
import UsersList from './UsersList'
import Navbar from './Navbar';
import UserMenu from './UserMenu'
import CreateUser from './CreateUser'
import MyProfile from '../../components/MyProfile'
import UpdateUser from './UserList/UpdateUser'

import './css/Developer.css'
import '../css/main.css'

const Developer = () => {
    const location = useLocation();
    const dispatch = useDispatch();

    const permissions = useSelector(state => state.auth.permissions);

    if(location.hash !== '#updateuser') {
        dispatch(idGetUser(''))
    }

    const optionsMenu = [];

    for (let i= 4; i < 10; i++) {
        if (permissions[i].actions.get) {
            optionsMenu.push(permissions[i]);
        }
    }

    return (
        <div className='developer'>
            <UserMenu optionsMenu={optionsMenu}/>
            <Navbar />
            <div className='main'>
                {
                    {   '#perfil': <MyProfile />,
                        '': <UsersList title='Todos los usuarios'/>,
                        '#users': <UsersList title='Todos los usuarios'/>,
                        '#crearusuario': <CreateUser />,
                        '#updateuser': <UpdateUser />,
                        '#developers': <UsersList title='Desarrolladores'/>,
                        '#administrators': <UsersList title='Administradores'/>,
                        '#owners': <UsersList title='Propietarios'/>,
                        '#customers': <UsersList title='Clientes'/>,
                        '#deliveries': <UsersList title='Deliveries'/>
                    }[location.hash]
                }
            </div>
        </div>
    )
}

export default Developer
