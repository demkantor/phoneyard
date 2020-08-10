import React, { useContext } from 'react';
import { ProductContext } from '../../context/context';

const CartItem = ({ item }) => {
    const { decrement, increment, removeItem } = useContext(ProductContext);
    const { count, id, img, price, title, total } = item;

    return (
        <div className="row my-2 text-center text-capitalize">
            <div className="col-10 mx-auto col-lg-2">
                <img src={img} alt={title} style={{width:'5rem', height:'5rem'}} className="img-fluid" />
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">product: </span> {title}
            </div>
            <div title={`price per ${title}`} className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">price: </span> ${price}
            </div>
            <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                <div className="d-flex justify-content-center">
                    <div>
                        <span title="remove one" className="btn btn-black mx-1" onClick={()=>decrement(id)}>
                            -
                        </span>
                        <span className="btn btn-black mx-1">
                            {count}
                        </span>
                        <span title="add another" className="btn btn-black mx-1" onClick={()=>increment(id)}>
                            +
                        </span>
                    </div>
                </div>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <div title="remove item"className="cart-icon">
                    <i className="fas fa-trash" onClick={()=>removeItem(id)} />
                </div>
            </div>
            <div title={`total price for ${title}'s`} className="col-10 mx-auto col-lg-2">
                <strong>item total: ${total}</strong>
            </div>
        </div>
    );
};

export default CartItem;
