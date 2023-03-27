import { useContext } from "react";
import { ProductsContext } from "../../contexts/products.context";

const Shop = () => {
    const { products } = useContext(ProductsContext)
    console.log(products); // name, id, price, imageUrl
    return (
        <>
            <h1>Shop page component</h1>
            {products.map(({ id, name, price, imageUrl }) => (
                <div key={id}>
                    <h3>{name}</h3>
                    <p>{price}</p>
                    <img alt={name} src={imageUrl} />
                </div>
            ))}
        </>
    )
}

export default Shop;