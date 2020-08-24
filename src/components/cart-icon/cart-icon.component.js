import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { toggleCartDropdown } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';

// eslint-disable-next-line no-shadow
const CartIcon = ({ toggleCartDropdown, itemsCount }) => (
    <div className="cart-icon" onClick={toggleCartDropdown}>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">{itemsCount}</span>
    </div>
);

const mapStateProps = createStructuredSelector({
    itemsCount: selectCartItemsCount,
});

const mapDispatchToProps = (dispatch) => ({
    toggleCartDropdown: () => dispatch(toggleCartDropdown()),
});

export default connect(
    mapStateProps,
    mapDispatchToProps,
)(CartIcon);