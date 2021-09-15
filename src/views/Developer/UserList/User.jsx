import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { deleteUser } from '../../../redux/actions/user'
import { transformUppercase } from '../../../helpers/transformUppercase'
import UpdateUser from './UpdateUser'

import "./css/User.css"



const User = ({ user }) => {
    const dispatch = useDispatch();
    const { id, firstname, lastname, roles, profile_image } = user;

    const access = useSelector(state => state.auth.access);

    const handleDelete = () =>{
        dispatch(deleteUser(id, access));
    }

    return (
        <tr>
            <td>
                {
                    profile_image
                        ? 
                            <img src={profile_image} alt='' className='avatarUsers'/> 
                        : 
                        <i className='material-icons grey-text text-lighten-1 iconUsers'>account_circle</i>

                }
            </td>
            <td>{firstname} {lastname}</td>
            {
                roles && <td>{transformUppercase(roles.name)}</td>
            }
            <td>
                    <i onClick={handleDelete} className='delete material-icons red-text'>
                        delete
                    </i>
            </td>
            <td>
                <UpdateUser id={id}  />
            </td>
        </tr>
    )
}

export default User;
