import { useContext } from "react";
import Button from "../../components/button/button.component";
import { CartContext } from "../../contexts/cart.context";
import './checkout.styles.scss';

const Checkout = () => {
    const { cartItems, setCartItems } = useContext(CartContext);
    console.log(cartItems);

    const updateQuantity = (id, increment) => {
        const updatedCartItems = cartItems.map(cartItem => {
            if (cartItem.id === id) {
                if (increment && cartItem.quantity >= 0) cartItem.quantity++
                if (!increment && cartItem.quantity > 0) cartItem.quantity--;
            }
            return cartItem;
        });
        setCartItems(updatedCartItems);
    }

    const handleRemoveItem = (id) => {
        const updatedCartItems = cartItems.filter((item) => item.id !== id);
        setCartItems(updatedCartItems);
    };

    const handleDecrementQuantity = (id) => {
        updateQuantity(id, false);
    }

    const handleIncrementQuantity = (id) => {
        updateQuantity(id, true);
    }

    const grandTotal = cartItems.reduce((total, item) => {
        const itemTotal = item.price * item.quantity;
        return total + itemTotal;
    }, 0);

    return (
        <div>
            <h1>Checkout Page</h1>
            {cartItems.map(({ id, name, price, quantity, imageUrl }) => (
                <div key={id} className="checkout-container">
                    <img src={imageUrl} alt={name} />
                    <p>{name}</p>
                    <div className="btn-container">
                        <span onClick={() => handleDecrementQuantity(id)}>&lt;</span>
                        <p>{quantity}</p>
                        <span onClick={() => handleIncrementQuantity(id)}>&gt;</span>
                    </div>
                    <p>{`$${price}`}</p>
                    <Button onClick={() => handleRemoveItem(id)}>X</Button>
                </div>
            ))
            }
            <h3>{grandTotal.toFixed(2)}</h3>
        </div>
    )
}
export default Checkout;
