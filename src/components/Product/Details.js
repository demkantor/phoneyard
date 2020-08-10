import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProductContext } from '../../context/context';
import ButtonContainer from '../../Styles/Button';


const Details = () => {
    const { addToCart, detailedProduct, openModal } = useContext(ProductContext);
    const { company, id, img, inCart, info, price, title } = detailedProduct;

    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                    <h1>{title}</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3" >
                    <img src={img} alt={title} className="img-fluid" />
                </div>
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize" >
                    <h3>model: {title}</h3>
                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                        made by: 
                        <span className="text-uppercase">
                            {company}
                        </span>
                    </h4>
                    <h4 className="text-blue">
                        <strong>
                            price: {" "}${price}
                        </strong>
                    </h4>
                    <p className="text-capitalize font-weight-bold mt-3 mb-0">
                        more details:
                    </p>
                    <p className="text-muted lead">
                        {info}
                    </p>
                    <div>
                        <Link to="/">
                            <ButtonContainer>
                                back to products
                            </ButtonContainer>
                        </Link>
                        <ButtonContainer 
                            cart
                            disabled={inCart ? true : false}
                            onClick={()=>{addToCart(id); openModal(id);}}>
                                {inCart ? "in Cart" : "add to cart"}
                        </ButtonContainer>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;
