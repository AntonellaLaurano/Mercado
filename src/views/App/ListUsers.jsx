import React from 'react'
import { useSelector } from 'react-redux';
import User from './ListUser/User';

import "./css/ListUsers.css"

const ListUsers = () => {
    const users = useSelector((state) => state.user.data);
    console.log("ListUsers");
    console.log(users);
    
    return (
        <div className="ListUser">
            <table>
                <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Delete</th>
                    <th>Update</th>
                </tr>
                </thead>
                <tbody>
                    {
                        users && users.map((element) => {
                            return <User key={element.id} element={element} />
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListUsers;
