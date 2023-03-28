import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem }) => {
    const { id, name, price, quantity, imageUrl } = cartItem;
    const { cartItems, removeItemFromCart, addItemToCart, setCartItems } = useContext(CartContext);

    const handleRemoveItem = (id) => {
        const updatedCartItems = cartItems.filter((item) => item.id !== id);
        setCartItems(updatedCartItems);
    };

    return (
        <div key={id} className="checkout-item-container">
            <img className="image-container" src={imageUrl} alt={name} />
            <p className="name">{name}</p>
            <div className="quantity ">
                <span className="arrow" onClick={() => removeItemFromCart(cartItem)}>&lt;</span>
                <p className="value">{quantity}</p>
                <span className="arrow" onClick={() => addItemToCart(cartItem)}>&gt;</span>
            </div>
            <p className="price">{`$${price}`}</p>
            <span className="remove-button" onClick={() => handleRemoveItem(cartItem)}>&#10005;</span>
        </div>
    )
}

export default CheckoutItem;