import { createContext, useEffect, useState } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";

import SHOP_DATA from "../shop-data.js";

export const ProductsContext = createContext({
    products: [],
});

export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    // Run only once to add it to firebase
    // useEffect(() => {
    //     addCollectionAndDocuments('categories', SHOP_DATA);
    // }, []);

    // Getting the categories from the firebase
    useEffect(() => {
        const getCategories = async () => {
            const categories = await getCategoriesAndDocuments();
            console.log(categories);
        }
        getCategories();
    }, [])

    const value = { products };
    return (
        <ProductsContext.Provider value={value}>
            {children}
        </ProductsContext.Provider>
    )
}