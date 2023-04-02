import { CartIconContainer, ItemCount, ShoppingIcon } from './cart-icon.styles.jsx';

import { useDispatch, useSelector } from 'react-redux';
import { setIsCartOpen } from "../../store/cart/cart.action";
import { selectCartCount, selectIsCartOpen } from '../../store/cart/cart.selector.js';

const CartIcon = () => {
    const dispatch = useDispatch();
    // const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
    const cartCount = useSelector(selectCartCount);
    const isCartOpen = useSelector(selectIsCartOpen);

    const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

    return (
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingIcon />
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon;