import React, { useState } from 'react';

import '../css/components/passwordVisibility.css';

const PasswordVisibility = () => {
    const [visibilityIcon, setVisibilityIcon] = useState('visibility_off')

    const handleVisibility = (event) => {
        event.preventDefault();
        const value = event.target;
        if (value.nextElementSibling.type === 'password') {
            value.nextElementSibling.type = 'text';
            setVisibilityIcon('visibility')
        } else {
            value.nextElementSibling.type = 'password';
            setVisibilityIcon('visibility_off')
        }
    }
    return (
        <i onClick={handleVisibility} className="material-icons prefix visibility">{visibilityIcon}</i>
    )
}

export default PasswordVisibility