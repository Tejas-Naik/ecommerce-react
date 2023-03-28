import { useContext } from "react";
import Button from "../../components/button/button.component";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { CartContext } from "../../contexts/cart.context";
import './checkout.styles.scss';

const Checkout = () => {
    const { cartItems, addItemToCart, removeItemFromCart } = useContext(CartContext);
    console.log(cartItems);

    const grandTotal = cartItems.reduce((total, item) => {
        const itemTotal = item.price * item.quantity;
        return total + itemTotal;
    }, 0);

    return (
        <div className="checkout-container">
            <h1>Checkout Page</h1>
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {cartItems.map((cartItem) => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            ))
            }
            <span className="total">Total: {grandTotal.toFixed(2)}</span>
        </div>
    )
}
export default Checkout;
