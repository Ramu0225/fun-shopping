import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import{ReactComponent as Logo} from '../../assets/crown.svg'
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.components';
import './header.styles.scss';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';


const Header = ({ currentUser, hidden }) =>(
    <div className= 'header'>
        <Link className= 'logo-container' to="/">
            <Logo className= 'logo'/>
        </Link>
        <div className= 'options'>
            <Link className= 'option' to='/shop'>
                SHOP
            </Link> 
            <Link className= 'option' to='/shop'>
                CONTACT
            </Link>  
            {   currentUser?
                <div className='option' onClick={() => auth.signOut()}>SIGNOUT</div>
                : <Link className='option' to='/signin'>SIGNIN</Link>
            }
            <CartIcon />
        </div>
        {hidden? null: <CartDropdown />}
    </div>

);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden

})
export default connect(mapStateToProps)(Header);