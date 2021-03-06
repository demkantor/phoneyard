import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProductContext } from '../../context/context';
import PayPalBtn from './PayPal';

const CartTotals = ({ history }) => {
    
    const { cartSubtotal, cartTax, cartTotal, clearCart } = useContext(ProductContext);

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                        <Link to="/">
                            <button 
                                title="remove all items from cart"
                                className="btn btn-outline-danger text-uppercase mb-3 px-5"
                                type="button"
                                onClick={()=>clearCart()}>
                                    clear cart
                            </button>
                        </Link>
                        <h5>
                            <span className="text-title">
                                subtotal:
                            </span>
                            <strong>${cartSubtotal}</strong>
                        </h5>
                        <h5>
                            <span className="text-title">
                                tax:
                            </span>
                            <strong>${cartTax}</strong>
                        </h5>
                        <h5>
                            <span className="text-title">
                                total:
                            </span>
                            <strong>${cartTotal}</strong>
                        </h5>
                        <PayPalBtn
                            clearCart={clearCart}
                            total={cartTotal}
                            history={history} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default CartTotals;
