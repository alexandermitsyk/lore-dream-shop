import React from 'react'
import './custom-button.style.scss';

const CustomButton = ({ children, isGoogleSignIn, inverted, isFacebookSignIn, ...otherProps }) => {
    let social_class = '';

    if(isGoogleSignIn){
        social_class = 'google-sign-in';
    } else if(isFacebookSignIn){
        social_class = 'facebook-sign-in';
    }

    return (
        <button className={`${social_class} ${inverted ? 'inverted' : ''} custom-button`} {...otherProps}>
            {children}
        </button>
    )
}

export default CustomButton;
