import React, { useContext } from 'react';
import Product from './Product';
import Title from '../../Styles/Title';
import { ProductContext } from '../../context/context';

const ProductList = () => {

    const { products } = useContext(ProductContext);

    return (
        <div className="py-5">
            <div className="container">
                <Title 
                    name={"our"}
                    title={"products"} 
                    />
                <div className="row">
                    { products.map(product => (
                        <Product 
                            key={product.id} 
                            product={product} />
                    )) }
                </div>
            </div>
        </div>
    );
};

export default ProductList;
