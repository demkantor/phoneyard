import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ProductContext } from '../../context/context';

const ProductWrapper = styled.div`

`;


const Product = ({ product }) => {
    const { id, title, img, price, inCart } = product;
    const { products, handleDetails, addToCart } = useContext(ProductContext);

    return (
        <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
            <div className="card">
                <div className="img-container p-5" onClick={()=>handleDetails(id)}>
                    <Link to="/details">
                        <img src={img} alt={title} className="card-img-top" />
                    </Link>
                    <button 
                        className="cart-btn"
                        disabled={inCart ? true : false}
                        onClick={()=>addToCart(id)}>
                            {inCart
                            ?
                                <p className="text-capitalize mb=0" disabled title={"already in cart"}>
                                    {" "} in cart
                                </p>
                            :
                                <i className="fas fa-cart-plus" />
                            }
                    </button>
                </div>
                <div className="card-footer d-flex justify-content-between">
                    <p className="align-self-center mb-0">
                        {title}
                    </p>
                    <h5 className="text-blue font-italic mb-0">
                        {"$ "}{price}
                    </h5>
                </div>
            </div>  
        </ProductWrapper>
    );
};

export default Product;
