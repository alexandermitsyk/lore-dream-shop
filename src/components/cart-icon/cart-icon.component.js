import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';
import { connect } from 'react-redux';
import { toggleCartDropdown } from '../../redux/cart/cart.actions';

const CartIcon = ({toggleCartDropdown, cartItems}) => {
    return (
        <div className="cart-icon" onClick={toggleCartDropdown}>
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">{cartItems.length}</span>
        </div>
    )
}

const mapStateProps = ({cart: {cartItems}}) => ({
    cartItems
});

const mapDispatchToProps = dispatch => ({
    toggleCartDropdown: () => dispatch(toggleCartDropdown())
});

export default connect(mapStateProps, mapDispatchToProps)(CartIcon);