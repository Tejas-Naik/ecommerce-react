import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../contexts/cart.context';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import { CartDropdownContainer, CartItems, EmptyMessage } from './cart-dropdown.styles';

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate('/checkout')
    }

    return (
        <CartDropdownContainer>
            {/* <p className='empty-message'>Add to cart to show items here</p> */}
            <CartItems>
                {
                    cartItems.length ? (
                        cartItems.map((item) => <CartItem id={item.id} cartItem={item} />)
                    ) :
                        <EmptyMessage>Your cart is empty</EmptyMessage>
                }

            </CartItems>
            <Button onClick={goToCheckoutHandler}>go to Checkout</Button>
        </CartDropdownContainer>
    )
}

export default CartDropdown;