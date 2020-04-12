import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../custom-button/custom-button.compenent';
import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.component';

const CartDropdown = ({ cartItems }) => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
                }
            </div>
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    )
}

const mapStateProps = ({cart: {cartItems}}) => ({
    cartItems
});

export default connect(mapStateProps)(CartDropdown);
