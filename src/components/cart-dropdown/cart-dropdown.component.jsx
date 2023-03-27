import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import './cart-dropdown.styles.scss';

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);
    return (
        <div className='cart-dropdown-container'>
            {/* <p className='empty-message'>Add to cart to show items here</p> */}
            <div className='cart-items'>
                {cartItems.map((item) => <CartItem id={item.id} cartItem={item} />)}
            </div>
            <Button>go Checkout</Button>
        </div>
    )
}

export default CartDropdown;