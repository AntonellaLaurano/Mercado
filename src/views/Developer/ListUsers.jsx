import React from 'react'
import { useSelector } from 'react-redux';
import User from './ListUser/User';

import './css/ListUsers.css'

const ListUsers = () => {
    const users = useSelector((state) => state.user.data);
    
    return (
        <div className='ListUser'>
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

export default ListUsers;
