import React from 'react';
import './custom-button.style.scss';

const CustomButton = ({
    children, isGoogleSignIn, inverted, isFacebookSignIn, ...otherProps
}) => {
    let SocialClass = '';

    if (isGoogleSignIn) {
        SocialClass = 'google-sign-in';
    } else if (isFacebookSignIn) {
        SocialClass = 'facebook-sign-in';
    }

    return (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <button type="button" className={`${SocialClass} ${inverted ? 'inverted' : ''} custom-button`} {...otherProps}>
            {children}
        </button>
    );
};

export default CustomButton;
