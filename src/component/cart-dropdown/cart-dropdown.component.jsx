import React from 'react';
import CartItem from '../cart-item/cart-item.components';
import { connect } from 'react-redux';
import CustomButton from '../custom-buton/custom-button.component';

import './cart-dropdown.styles.scss';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';

const CartDropdown = ({ cartItems }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {cartItems.length?(
                cartItems.map(cartItem => (
                <CartItem key={cartItem.id} item={cartItem} />
            ))):(<span className='empty-message'>No items in the cart</span>)
        }
        </div> 
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>

);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default connect(mapStateToProps)(CartDropdown);