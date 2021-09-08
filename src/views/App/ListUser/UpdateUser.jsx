import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { updateUser } from '../../../actions/user';
import { userById } from '../../../helpers/userById.js';

import "./css/UpdateUser.css"

import M from 'materialize-css'


const UpdateUser = ({ id }) => {
    const dispatch = useDispatch();

    const access =  useSelector(state => state.auth.access);

    const [update, setUpdate] = useState(false);


    const [dataUpdate, setDataUpdate] = useState({
        firstname: "",
        lastname: "",
        email: "",
        birthday_date: null,
        roles: {},
        sexual_orientation: "F",
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
        console.log(update)
        if (update) {
            notify();
        }
    }, [update]);



    const handleChange = (e) => {
        const value = e.target.value;
        setDataUpdate({
            ...dataUpdate,
           [e.target.name]: value
        });
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        setUpdate(true);
        var elem = document.querySelectorAll('.modal');
        M.Modal.init(elem);
        
    }

    const handleUpdateUser = (e) => {
        e.preventDefault();
        dispatch(updateUser(dataUpdate, id, access));
    }

    return (
        <div>
            <button data-target={`modalU${id}`} onClick={handleUpdate} className="update btn blue modal-trigger"><i className="material-icons">edit</i></button>
            {
                 <div id={`modalU${id}`}  className="row modal animate__animated animate__fadeIn">
                    <form className="col s12" onSubmit={handleUpdateUser}>
                        <div className="row">
                            <div className="input-field col s6">
                            <input onChange={handleChange} value={dataUpdate.firstname} name="firstname" id={`firstname${id}`} type="text" className="validate"/>
                            <label htmlFor={`firstname${id}`} className="active">First Name</label>
                            </div>
                            <div className="input-field col s6">
                            <input onChange={handleChange} value={dataUpdate.lastname} name="lastname" id={`lastname${id}`} type="text" className="validate"/>
                            <label htmlFor={`lastname${id}`} className="active">Last Name</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                            <input onChange={handleChange} value={dataUpdate.email} name="email" id={`email${id}`}type="email" className="validate"/>
                            <label htmlFor={`email${id}`} className="active">Email</label>
                            </div>
                        </div>
                        <button className="waves-effect waves-light btn modal-close" type="submit">Update User</button>
                    </form>
                </div>
            }
            
        </div>
        
    )
}

export default UpdateUser
