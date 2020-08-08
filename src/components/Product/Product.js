import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ProductContext } from '../../context/context';
import PropTypes from 'prop-types';

const ProductWrapper = styled.div`
    .card {
        border-color: transparent;
        transition: var(--tran-secondary);
    }
    .card-footer {
        background: transparent;
        border-top: transparent;
        transition: var(--tran-secondary);
    }
    &:hover {
        .card {
            border: 0.04rem solid rgba(0,0,0,0.2);
            box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
        }
        .card-footer {
            background: rgba(247, 247, 247);
        }
    }
    .img-container {
        position: relative;
        overflow: hidden;
    }
    .card-img-top {
        transition: var(--tran-secondary);
    }
    .img-container:hover .card-img-top {
        transform: scale(1.2);
    }
    .cart-btn {
        position: absolute;
        bottom: 0;
        right: 0;
        padding: 0.2rem 0.4rem;
        background: var(--blue-secondary);
        border: none;
        color: var(--white-primary);
        font-size: 1.4rem;
        border-radius: 0.5rem 0 0 0;
        transform: translate(100%, 100%);
        transition: var(--tran-secondary);
    }
    .img-container:hover .cart-btn {
        transform: translate(0,0);
    }
    .cart-btn:hover {
        color: var(--blue-primary);
        cursor: pointer;
    }
`;


const Product = ({ product }) => {
    const { id, img, inCart, price, title } = product;
    const { addToCart, handleDetails } = useContext(ProductContext);

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
                                <i className="fas fa-cart-plus" title={"add to cart"} />
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

Product.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number,
        img: PropTypes.string,
        inCart: PropTypes.bool,
        price: PropTypes.number,
        title: PropTypes.string
    }).isRequired
};

export default Product;
