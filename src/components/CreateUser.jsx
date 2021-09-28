import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createUser } from '../redux/actions/user'
import { useHistory } from 'react-router'

import '../css/components/createUser.css'
//import '../css/main.css'

import M from 'materialize-css'

const CreateUser = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const access = useSelector(state => state.auth.access);
    const role = useSelector(state => state.auth.role);

    useEffect(() => {
        var elems = document.querySelectorAll('select');
        M.FormSelect.init(elems);
    }, [])

    const [dataCreate, setdataCreate] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        stores: [1],
        roles: 6,
        sexual_orientation: 'F',
        profile_image: null
    });

    const { firstname, lastname, email, password } = dataCreate;

    const handleChange = (e) => {
        let value;
        if (e.target.name === 'roles') {
            value = parseInt(e.target.value);
        } else {
            value = e.target.value;
        }
        setdataCreate({
            ...dataCreate,
           [e.target.name]: value
        })
    }

    const handleCreate = (e) => {
        e.preventDefault();
        dispatch(createUser(dataCreate, access));
        history.push(`${role}`)
    }

    

    return (
        <div className='CreateUser glass'>
                <form className='col s12' onSubmit={handleCreate}>
                    <div className='row'>
                        <div className='input-field col s6'>
                            <input onChange={handleChange} value={firstname} name='firstname' id='first_name' type='text' className='validate' required/>
                            <label htmlFor='first_name'>Nombre</label>
                        </div>
                        <div className='input-field col s6'>
                            <input onChange={handleChange} value={lastname} name='lastname' id='last_name' type='text' className='validate'required/>
                            <label htmlFor='last_name'>Apellido</label>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='input-field col s12'>
                            <input onChange={handleChange} value={email} name='email' id='email' type='email' className='validate' required/>
                            <label htmlFor='email'>Email</label>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='input-field col s12'>
                            <input onChange={handleChange} value={password} name='password' id='password' type='password' className='validate' required/>
                            <label htmlFor='password'>Contraseña</label>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='input-field col s12'>
                            <select onChange={handleChange} name='roles' defaultValue={''} required aria-required="true">
                                <option value='' disabled>Elige tu opción</option>
                                <option value={1}>Desarrollador</option>
                                <option value={2}>Administrador</option>
                                <option value={3}>Propietario</option>
                                <option value={4}>Gerente</option>
                                <option value={5}>Delivery</option>
                                <option value={6}>Cliente</option>
                            </select>
                            <label htmlFor='roles'>Rol</label>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='input-field col s12'>
                            <select onChange={handleChange} name='sexual_orientation' defaultValue={''} className='validate' required aria-required="true">
                                <option value='' disabled>Elige tu opción</option>
                                <option value='F'>Femenino</option>
                                <option value='M'>Masculino</option>
                            </select>
                            <label htmlFor='sexual_orientation'>Otientación sexual</label>
                        </div>
                    </div>
                    <button className='waves-effect waves-light btn orange darken-2' type='submit'>Create User</button>
                </form>
        </div>
    )
}

export default CreateUser
