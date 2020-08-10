import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ProductContext } from '../../context/context';
import Title from '../../Styles/Title';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import CartList from './CartList';



const Cart = () => {
    const { cart } = useContext(ProductContext);


    return (
        <section>
            {cart.length > 0
            ?
            <>
                <Title name="your" title="cart" />
                <CartColumns />
                <CartList cart={cart} />
            </>
            :
                <EmptyCart />
            }
        </section>
    );
};

export default Cart;
