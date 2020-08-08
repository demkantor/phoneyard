import React, { createContext, useEffect, useState } from 'react';
import { storeProducts, detailProduct } from './data';

const ProductContext = createContext();



const ProductProvider = ({ children }) => {
    const [detailedProduct, setDetailedProduct] = useState(detailProduct);
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

    
    const handleDetails = (id) => {
        console.log('hello from handle detail', id);
    };

    const addToCart = (id) => {
        console.log('hello from add to cart', id);
    };

    return (
        <ProductContext.Provider value={{ addToCart, detailedProduct, handleDetails, products }}>
            { children }
        </ProductContext.Provider>
    );
};


// const ProductConsumer = createContext.consumer;

export { ProductProvider, ProductContext };
