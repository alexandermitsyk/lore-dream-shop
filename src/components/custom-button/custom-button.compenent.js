import React from 'react'
import './custom-button.style.scss';

const CustomButton = ({ children, isGoogleSignIn, isFacebookSignIn, ...otherProps }) => {

    let className = '';

    if(isGoogleSignIn){
        className = 'google-sign-in';
    } else if(isFacebookSignIn){
        className = 'facebook-sign-in';
    }

    return (
        <button className={`${className} custom-button`} {...otherProps}>
            {children}
        </button>
    )
}

export default CustomButton;
