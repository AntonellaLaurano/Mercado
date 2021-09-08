import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { deleteUser } from '../../../actions/user'

import "./css/User.css"
import UpdateUser from './UpdateUser'


const User = ({ element }) => {
    const { id, firstname, lastname } = element;

    const access = useSelector(state => state.auth.access);

    const dispatch = useDispatch()
    
    const handleDelete = () =>{
        dispatch(deleteUser(id, access));
    }

    return (
        <tr>
            <td>{firstname}</td>
            <td>{lastname}</td>
            <td>
                <button onClick={handleDelete} className="delete btn red"> 
                    <i className="material-icons">
                        delete
                    </i>
                </button>
            </td>
            <td>
                <UpdateUser id={id}  />
            </td>
        </tr>
    )
}

export default User;
