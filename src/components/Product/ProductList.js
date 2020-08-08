import React, { useState, useContext } from 'react';
import Product from './Product';
import Title from '../../Styles/Title';
import { ProductContext } from '../../context/context';

const ProductList = () => {

    const { products } = useContext(ProductContext);

    return (
        // <Product />
        <>
            <div className="py-5">
                <div className="container">
                    <Title 
                        name={"our"}
                        title={"products"} 
                        />
                    <div className="row">
                        { products.map(product => (
                            <h3>{product.title}</h3>
                        )) }
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductList;
