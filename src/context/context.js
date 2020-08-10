import React, { createContext, useEffect, useState } from 'react';
import { storeProducts } from './data';

const ProductContext = createContext();


const ProductProvider = ({ children }) => {
    const [cart, setCart] = useState(storeProducts);
    const [cartSubtotal, setCartSubtotal] = useState(0);
    const [cartTax, setCartTax] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);
    const [detailedProduct, setDetailedProduct] = useState({});
    const [modalOpen, setModalOpen] = useState(false);
    const [modalProduct, setModalProduct] = useState('');
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
        let tempProducts = [...products];
        const index = tempProducts.indexOf(getItem(id));
        const product = tempProducts[index];

        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;

        setProducts(tempProducts);
        setCart([...cart, product]);
    };

    const clearCart = () => {
        console.log('cart emptied!');
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const decrement = (id) => {
        console.log('decrement ', id)
    };

    const getItem = (id) => {
        const product = products.find(item => item.id === id);
        return product
    };

    const handleDetails = (id) => {
        const product = getItem(id);
        setDetailedProduct(product);
    };

    const increment = (id) => {
        console.log('increment ', id)
    };

    const openModal = (id) => {
        const product = getItem(id);
        setModalProduct(product);
        setModalOpen(true);
    };

    const removeItem = (id) => {
        console.log('remove item', id)
    };

    return (
        <ProductContext.Provider value={{ 
            addToCart, 
            cart, 
            cartSubtotal,
            cartTax,
            cartTotal,
            clearCart,
            closeModal,
            decrement, 
            detailedProduct, 
            handleDetails, 
            increment,
            openModal, 
            modalOpen,
            modalProduct,
            products,
            removeItem
        }}>
            { children }
        </ProductContext.Provider>
    );
};

export { ProductProvider, ProductContext };
