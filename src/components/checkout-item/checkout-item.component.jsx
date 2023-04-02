import { useSelector, useDispatch } from 'react-redux';

import { selectCartItems } from '../../store/cart/cart.selector';
import { addItemToCart, removeItemFromCart, clearItemFromCart } from "../../store/cart/cart.action"

import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem }) => {
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);
    const { id, name, price, quantity, imageUrl } = cartItem;


    const removeItemHandler = () => dispatch(removeItemFromCart(cartItems, cartItem));
    const clearItemHandler = () => dispatch(clearItemFromCart(cartItems, cartItem));
    const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));

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