import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { deleteUser, idGetUser } from '../../redux/actions/user'
import { transformUppercase } from '../../helpers/transformUppercase'

import '../../css/components/UserList/user.css'

const User = ({ user }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { id, firstname, lastname, roles, profile_image } = user;

    const access = useSelector(state => state.auth.access);
    const role = useSelector(state => state.auth.role);
    const permissions = useSelector(state => state.auth.permissions);

    const handleDelete = async () =>{
        dispatch(deleteUser(id, roles.name, access));
    }

    const handleUpdate = () => {
        dispatch(idGetUser(id));
        history.push(`/${role}#actualizarusuario`);
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
            <td>
                {roles && transformUppercase(roles.name)}
            </td>
            {
                permissions[4].actions.delete &&
                <td>
                    <i onClick={handleDelete} className='delete material-icons red-text'>delete</i>
                </td>
            }
            <td>
                <i onClick={handleUpdate} className='update material-icons orange-text text-darken-2'>edit</i>
            </td>
        </tr>
    )
}

export default User;
