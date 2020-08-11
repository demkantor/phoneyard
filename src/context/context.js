import React, { createContext, useCallback, useEffect, useState } from 'react';
import { storeProducts } from './data';

const ProductContext = createContext();


const ProductProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [cartSubtotal, setCartSubtotal] = useState(0);
    const [cartTax, setCartTax] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);
    const [detailedProduct, setDetailedProduct] = useState({});
    const [modalOpen, setModalOpen] = useState(false);
    const [modalProduct, setModalProduct] = useState('');
    const [products, setProducts] = useState([]);


    useEffect(() => {
        setOurProducts();

    }, []);



    const addToCart = async (id) => {
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

    const addTotals = useCallback(async () => {
        let subtotal = 0;
        cart.map(item =>(subtotal += item.total));
        /////////////////// set tax rate here ///////////current = 0.075///////////////
        const tempTax = subtotal * 0.075;
        const tax = parseFloat(tempTax.toFixed(2));
        const total = subtotal + tax;
        await setCartSubtotal(subtotal);
        await setCartTax(tax);
        await setCartTotal(total);
    }, [cart]);

    useEffect(() => {
        if (cart.length >= 1) {
            addTotals();
        }
    }, [addTotals, cart]);

    const clearCart = () => {
        setCart([]);
        setOurProducts();
        addTotals();
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const decrement = async (id) => {
        let tempCart = [...cart];
        const selectedProduct = tempCart.find(item => item.id === id);
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];

        product.count = product.count - 1;
        if(product.count === 0) {
            removeItem(id)
        } else {
            product.total = product.count * product.price;
            await setCart([...tempCart]);
            await addTotals();
        };
    };

    const getItem = (id) => {
        const product = products.find(item => item.id === id);
        return product
    };

    const handleDetails = (id) => {
        const product = getItem(id);
        setDetailedProduct(product);
    };

    const increment = async (id) => {
        let tempCart = [...cart];
        const selectedProduct = tempCart.find(item => item.id === id);
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];

        product.count = product.count + 1;
        product.total = product.count * product.price;

        await setCart([...tempCart]);
        await addTotals();
    };

    const openModal = (id) => {
        const product = getItem(id);
        setModalProduct(product);
        setModalOpen(true);
    };

    const removeItem = (id) => {
        let tempProducts = [...products];
        let tempCart = [...cart];

        tempCart = tempCart.filter(item => item.id !== id);
        const index = tempProducts.indexOf(getItem(id));
        let removedProduct = tempProducts[index];
        removedProduct.inCart = false;
        removedProduct.count = 0;
        removedProduct.total = 0;

        setCart([...tempCart]);
        setProducts([...tempProducts]);
        addTotals();
    };

    const setOurProducts = async () => {
        let ourProducts = [];
        await storeProducts.forEach((item) => {
            const singleItem = {...item};
            ourProducts = [...ourProducts, singleItem];
        });
        await setProducts(ourProducts);
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
