import React from 'react'
import { useSelector } from 'react-redux'
import User from './UserList/User'

import './css/UsersList.css'

const UsersList = ({ title }) => {
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
