import { ReactComponent as ShoppingCart } from "../../assets/shopping-bag.svg";
import './cart-icon.styles.scss';

import { useContext } from "react";
import { isCompositeComponent } from "react-dom/test-utils";
import { CartContext } from "../../contexts/cart.context";

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen } = useContext(CartContext);

    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

    return (
        <div className="cart-icon-container" onClick={toggleIsCartOpen}>
            <ShoppingCart className="shopping-icon" />
            <span className="item-count">0</span>
        </div>
    )
}

export default CartIcon;