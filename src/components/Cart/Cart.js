import React, { useContext } from 'react';
import { ProductContext } from '../../context/context';
import Title from '../../Styles/Title';
import CartColumns from './CartColumns';
import CartList from './CartList';
import CartTotals from './CartTotals';
import EmptyCart from './EmptyCart';


const Cart = (props) => {
    const { cart } = useContext(ProductContext);

    return (
        <section>
            {cart.length > 0
            ?
            <>
                <Title name="your" title="cart" />
                <CartColumns />
                <CartList cart={cart} />
                <CartTotals history={props.history} />
            </>
            :
                <EmptyCart />
            }
        </section>
    );
};

export default Cart;
