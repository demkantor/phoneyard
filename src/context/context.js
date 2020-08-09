import React, { createContext, useEffect, useState } from 'react';
import { storeProducts } from './data';

const ProductContext = createContext();



const ProductProvider = ({ children }) => {
    const [detailedProduct, setDetailedProduct] = useState({});
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const setOurProducts = () => {
            let ourProducts = [];
            storeProducts.forEach((item) => {
                const singleItem = {...item};
                ourProducts = [...ourProducts, singleItem];
            });
            setProducts(ourProducts);
        };

        setOurProducts();
    }, []);

    const addToCart = (id) => {
        console.log('hello from add to cart', id);
    };

    const getItem = (id) => {
        const product = products.find(item => item.id === id);
        return product
    };

    const handleDetails = (id) => {
        const product = getItem(id);
        setDetailedProduct(product);
    };

    return (
        <ProductContext.Provider value={{ addToCart, detailedProduct, handleDetails, products }}>
            { children }
        </ProductContext.Provider>
    );
};


// const ProductConsumer = createContext.consumer;

export { ProductProvider, ProductContext };
