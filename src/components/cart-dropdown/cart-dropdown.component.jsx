import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import './cart-dropdown.styles.scss';
import { Link } from 'react-router-dom';

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);
    return (
        <div className='cart-dropdown-container'>
            {/* <p className='empty-message'>Add to cart to show items here</p> */}
            <div className='cart-items'>
                {cartItems.map((item) => <CartItem id={item.id} cartItem={item} />)}
            </div>
            <Link to="/checkout"><Button>go to Checkout</Button></Link>
        </div>
    )
}

export default CartDropdown;