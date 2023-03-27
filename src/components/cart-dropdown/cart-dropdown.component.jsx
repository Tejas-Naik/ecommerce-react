import Button from '../button/button.component';
import './cart-dropdown.styles.scss';

const CartDropdown = () => {
    return (
        <div className='cart-dropdown-container'>
            {/* <p className='empty-message'>Add to cart to show items here</p> */}
            <div className='cart-item'>Cart Item</div>
            <Button>go Checkout</Button>
        </div>
    )
}

export default CartDropdown;