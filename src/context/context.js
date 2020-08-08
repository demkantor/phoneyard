import React, { createContext, useState } from 'react';
import { storeProducts, detailProduct } from './data';

const ProductContext = createContext();



const ProductProvider = ({ children }) => {
    const [detailedProduct, setDetailedProduct] = useState(detailProduct);
    const [products, setProducts] = useState(storeProducts);
    
    const handleDetails = () => {
        console.log('hello from handle detail');
    };

    const addToCart = () => {
        console.log('hello from add to cart');
    };

    return (
        <ProductContext.Provider value={{ addToCart, detailedProduct, handleDetails, products }}>
            { children }
        </ProductContext.Provider>
    );
};


// const ProductConsumer = createContext.consumer;

export { ProductProvider, ProductContext };
