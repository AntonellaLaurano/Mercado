import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createUser } from '../../redux/actions/user';

import './css/CreateUser.css'

const CreateUser = () => {
    const dispatch = useDispatch();
    const access = useSelector(state => state.auth.access);

    const [dataCreate, setdataCreate] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        stores: [1],
        roles: 2,
        sexual_orientation: "F",
        profile_image: null
    });

    const { firstname, lastname, email, password } = dataCreate;

    const handleChange = (e) => {
        const value = e.target.value;
        
        setdataCreate({
            ...dataCreate,
           [e.target.name]: value
        })
    }

    const handleCreate = (e) => {
        e.preventDefault();

        dispatch(createUser(dataCreate, access));
    }
    

    return (
        <div className="CreateUser">
            <div id="modalC" className="row modal animate__animated animate__fadeIn">
                <form className="col s12" onSubmit={handleCreate}>
                    <div className="row">
                        <div className="input-field col s6">
                        <input onChange={handleChange} value={firstname} name="firstname" id="first_name" type="text" className="validate"/>
                        <label htmlFor="first_name">First Name</label>
                        </div>
                        <div className="input-field col s6">
                        <input onChange={handleChange} value={lastname} name="lastname" id="last_name" type="text" className="validate"/>
                        <label htmlFor="last_name">Last Name</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                        <input onChange={handleChange} value={email} name="email" id="email" type="email" className="validate"/>
                        <label htmlFor="email">Email</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                        <input onChange={handleChange} value={password} name="password" id="password" type="password" className="validate"/>
                        <label htmlFor="password">Password</label>
                        </div>
                    </div>
                    <button className="waves-effect waves-light btn modal-close" type="submit">Create User</button>
                </form>
            </div>
        </div>
    )
}

export default CreateUser
