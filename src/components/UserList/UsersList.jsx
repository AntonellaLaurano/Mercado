import React from 'react'
import { useSelector } from 'react-redux'
import User from './User'
import '../../components/UserList/User'

import '../../css/components/UserList/usersList.css'

const UsersList = ({ title, role }) => {
    const users = useSelector((state) => state.user.data);

    return (
        <div className='usersList'>
            <h4 className='title'>{title}</h4>
            <table className='centered'>
                <tbody>
                        {
                            users && users.map(user => {
                                return <User key={user.id} user={user} />
                            })
                        }
                </tbody>
            </table>
        </div>
    )
}

export default UsersList;
