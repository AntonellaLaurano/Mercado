import React from 'react'
import { useSelector } from 'react-redux'

import { transformUppercase } from '../helpers/transformUppercase'

import './css/MyProfile.css'

const MyProfile = () => {
    const userProfile = useSelector(state => state.auth.details);
    console.log(userProfile)

    return (
        <div className='myProfile'>
            <div className='primary'>
                <div>
                    <h6>Firstname: {userProfile.firstname}</h6>
                    <h6>Lastname: {userProfile.lastname}</h6>
                    <h6>Role: {transformUppercase(userProfile.roles.name)}</h6>
                    <h6>Email: {userProfile.email}</h6><
                        h6>Nationality: {userProfile.nationality}</h6>
                    <h6>DNI: {userProfile.dni_information}</h6>
                    <h6>Birthday Date: {userProfile.birthday_date}</h6>
                    <h6>Mobile number: {userProfile.mobile_number}</h6>
                    <h6>Local number: {userProfile.local_number}</h6>
                    <h6>Sexual orientation: {userProfile.sexual_orientation}</h6>
                </div>
                <img alt='' className='circle' src='https://randomuser.me/api/portraits/men/75.jpg'/>
            </div>
        </div>
    )
}

export default MyProfile
