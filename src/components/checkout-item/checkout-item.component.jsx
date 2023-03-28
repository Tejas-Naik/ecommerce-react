import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem }) => {
    const { id, name, price, quantity, imageUrl } = cartItem;
    const { removeItemFromCart, addItemToCart, clearItemFromCart } = useContext(CartContext);

    const removeItemHandler = () => removeItemFromCart(cartItem);
    const clearItemHandler = () => clearItemFromCart(cartItem);
    const addItemHandler = () => addItemToCart(cartItem);

    return (
        <div key={id} className="checkout-item-container">
            <img className="image-container" src={imageUrl} alt={name} />
            <p className="name">{name}</p>
            <div className="quantity ">
                <span className="arrow" onClick={removeItemHandler}>&#10094;</span>
                <p className="value">{quantity}</p>
                <span className="arrow" onClick={addItemHandler}>&#10095;</span>
            </div>
            <p className="price">{`$${price}`}</p>
            <span className="remove-button" onClick={clearItemHandler}>&#10005;</span>
        </div>
    )
}

export default CheckoutItem;