import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { transformUppercase } from '../../helpers/transformUppercase'

import './css/UserMenu.css'
import { Link } from 'react-router-dom'
import { loadData } from '../../helpers/loadData'
import { users } from '../../redux/actions/user'

const UserMenu = () => {
    const dispatch = useDispatch();
    
    const access = useSelector(state => state.auth.access)
    const firstname = useSelector(state => state.auth.details.firstname);
    const lastname = useSelector(state => state.auth.details.lastname);
    const email = useSelector(state => state.auth.details.email);
    const role = useSelector(state => state.auth.role);

    const handleList = async (direction) => {
        const data = await loadData(access, direction);
        dispatch(users(data));
    }

    return (
            <ul id='slide-out' className='sidenav'>
                <li>
                    <div className='avatar'>
                        <img alt='' className='circle photoMenu' src='https://randomuser.me/api/portraits/men/75.jpg' />
                        <h6 className='white-text name'>{firstname} {lastname}</h6>
                        <h6 className='white-text role'>{transformUppercase(role)}</h6>
                        <h6 className='white-text email'>{email}</h6>
                    </div>
                </li>
                <li><Link to='/desarrollador#crearusuario' className='waves-effect waves-light'>Nuevo Usuario</Link></li>
                <li><div className='divider'></div></li>
                <li><Link to='/desarrollador' onClick={() => handleList('users')} className='waves-effect waves-light'>Todos los usarios</Link></li>
                <li><Link to='/desarrollador#desarrolladores' onClick={() => handleList('developers')} className='waves-effect waves-light'>Desarrolladores</Link></li>
                <li><Link to='/desarrollador#administradores' onClick={() => handleList('administrators')} className='waves-effect waves-light'>Administradores</Link></li>
                <li><Link to='/desarrollador#propietarios' onClick={() => handleList('owners')} className='waves-effect waves-light'>Propietarios</Link></li>
                <li><Link to='/desarrollador#clientes' onClick={() => handleList('customers')} className='waves-effect waves-light'>Clientes</Link></li>
                <li><Link to='/desarrollador#deliveries' onClick={() => handleList('deliveries')} className='waves-effect waves-light'>Deliveries</Link></li>
                <li><div className='divider'></div></li>
            </ul>
    )
}

export default UserMenu;
