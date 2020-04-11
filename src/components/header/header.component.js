import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth } from '../../firebase/firebase.utils';
import { ReactComponent as Logo } from '../../assets/lore.svg';

import './header.styles.scss';

const Header = ({ currentUser }) => {
    return (
        <div className="header">
            <Link className="logo-container" to="/">
                <Logo className="logo" />
            </Link>
            <div className="options">
                <Link className="option" to="/shop">SHOP</Link>
                {
                    currentUser 
                    ? 
                    <div className="option" onClick={()=> auth.signOut() }>SIGN OUT</div> 
                    : 
                    <Link className="option" to="/signin">SIGN IN</Link>
                }
                <Link className="option" to="/contact">CONTACT</Link>
            </div>
        </div>
    )
}

const mapStateProps = state => ({
    currentUser: state.user.currentUser
});

export default connect(mapStateProps)(Header);

