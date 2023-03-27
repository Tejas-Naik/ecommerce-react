import Button from '../button/button.component';
import './product-card.styles.scss';

const ProductCard = ({ product: { id, name, price, imageUrl } }) => {
    return (
        <div className='product-card-container'>
            <img alt={name} src={imageUrl} />
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <Button buttonType='inverted'>Add to cart</Button>
        </div>
    )
}

export default ProductCard;