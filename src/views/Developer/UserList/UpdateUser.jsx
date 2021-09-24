import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userById } from '../../../helpers/userById.js'
import { updateUser } from '../../../redux/actions/user.js'

import './css/UpdateUser.css'
import M from 'materialize-css'

const UpdateUser = () => {
    const dispatch = useDispatch();

    const access =  useSelector(state => state.auth.access);
    const id = useSelector(state => state.user.idGetUser);

    useEffect(() => {
        var elems = document.querySelectorAll('select');
        M.FormSelect.init(elems);
    }, [])

    const [dataUpdate, setDataUpdate] = useState({
        firstname: '',
        lastname: '',
        email: '',
        birthday_date: null,
        roles: {},
        sexual_orientation: 'F',
        profiles_social_networks: null,
        profile_image: null,
        dni_information: null,
        nationality: null,
        local_number: null,
        mobile_number: null,
        address: [],
        vehicle: []
    });

    const notify = async () => {
        try {
            const data = await userById(id, access);
            const user = await data.json();
            const { firstname, lastname, email, roles } = user;
            setDataUpdate({ ...dataUpdate, firstname, lastname, email, roles });
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        notify();
        // eslint-disable-next-line
    }, [id]);

    const handleChange = (e) => {
        const value = e.target.value;
        setDataUpdate({
            ...dataUpdate,
           [e.target.name]: value
        });
    }

    /*const handleUpdate = (e) => {
        e.preventDefault();
        setUpdate(true);
        var elem = document.querySelectorAll('.modal');
        M.Modal.init(elem);
    }*/

    const handleUpdateUser = (e) => {
        e.preventDefault();
        dispatch(updateUser(dataUpdate, id, access));
    }

    return (
        <div>
                <div className='row animate__animated animate__fadeIn glass'>
                <form className='col s12' onSubmit={handleUpdateUser}>
                    <div className='row'>
                        <div className='input-field col s6'>
                            <input onChange={handleChange} value={dataUpdate.firstname} name='firstname' id='firstname' type='text' className='validate'/>
                            <label htmlFor='firstname' className='active'>First Name</label>
                        </div>
                        <div className='input-field col s6'>
                            <input onChange={handleChange} value={dataUpdate.lastname} name='lastname' id='lastname' type='text' className='validate'/>
                            <label htmlFor='lastname' className='active'>Last Name</label>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='input-field col s12'>
                            <input onChange={handleChange} value={dataUpdate.email} name='email' id='email' type='email' className='validate'/>
                            <label htmlFor='email' className='active'>Email</label>
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
                    <button className='waves-effect waves-light btn modal-close' type='submit'>Update User</button>
                </form>
            </div>
        </div>
    )
}

export default UpdateUser
