import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { loadData } from '../helpers/loadData'
import { users } from '../redux/actions/user'
import { transformUppercase } from '../helpers/transformUppercase'

import '../css/components/userMenu.css'

const UserMenu = ({ optionsMenu }) => {
    const dispatch = useDispatch();
    
    const access = useSelector(state => state.auth.access);
    const firstname = useSelector(state => state.auth.details.firstname);
    const lastname = useSelector(state => state.auth.details.lastname);
    const email = useSelector(state => state.auth.details.email);
    const role = useSelector(state => state.auth.role);

    const handleList = async (direction) => {
        /**
         * Esta variable almacena la lista de datos de usuarios
         * @type {Object}
         */
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
                {
                    optionsMenu[0].en.actions.post &&
                    <>
                        <li><Link to='/desarrollador#crearusuario' className='waves-effect waves-light'>Nuevo Usuario</Link></li>
                        <li><div className='divider'></div></li>
                    </>
                }
                {
                    optionsMenu.map((option, i) => (
                        <li key={i}><Link to={`/${role}#${option.es.toLowerCase()}`} onClick={() => handleList(option.en.entity)} className='waves-effect waves-light'>{option.es}</Link></li>
                    ))
                }
                <li><div className='divider'></div></li>
                
            </ul>
    )
}

export default UserMenu;
