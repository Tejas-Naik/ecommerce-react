import shopData from "../../shop-data.json";
const Shop = () => {
    console.log(shopData); // name, id, price, imageUrl
    return (
        <>
            <h1>Shop page component</h1>
            {shopData.map(({ id, name, price, imageUrl }) => (
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