import { useContext } from "react";
import Button from "../../components/button/button.component";
import { CartContext } from "../../contexts/cart.context";
import './checkout.styles.scss';

const Checkout = () => {
    const { cartItems, setCartItems, addItemToCart, removeItemFromCart } = useContext(CartContext);
    console.log(cartItems);

    const handleRemoveItem = (id) => {
        const updatedCartItems = cartItems.filter((item) => item.id !== id);
        setCartItems(updatedCartItems);
    };
    const grandTotal = cartItems.reduce((total, item) => {
        const itemTotal = item.price * item.quantity;
        return total + itemTotal;
    }, 0);

    return (
        <div>
            <h1>Checkout Page</h1>
            {cartItems.map((cartItem) => {
                const { id, name, price, quantity, imageUrl } = cartItem;
                return (
                    <div key={id} className="checkout-container">
                        <img src={imageUrl} alt={name} />
                        <p>{name}</p>
                        <div className="btn-container">
                            <span onClick={() => removeItemFromCart(cartItem)}>&lt;</span>
                            <p>{quantity}</p>
                            <span onClick={() => addItemToCart(cartItem)}>&gt;</span>
                        </div>
                        <p>{`$${price}`}</p>
                        <Button onClick={() => handleRemoveItem(cartItem)}>X</Button>
                    </div>
                )
            })
            }
            <h3>{grandTotal.toFixed(2)}</h3>
        </div>
    )
}
export default Checkout;
