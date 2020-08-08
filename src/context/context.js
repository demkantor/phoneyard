import React, { createContext, useState } from 'react';
import { storeProducts, detailProduct } from './data';

const ProductContext = createContext();



const ProductProvider = ({ children }) => {
    const [detailedProduct, setDetailedProduct] = useState(detailProduct);
    const [products, setProducts] = useState(storeProducts);
    

    return (
        <ProductContext.Provider value={{ products, detailedProduct }}>
            { children }
        </ProductContext.Provider>
    );
};


// const ProductConsumer = createContext.consumer;

export { ProductProvider, ProductContext };
