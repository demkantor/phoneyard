import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ProductContext } from '../../context/context';
import ButtonContainer from '../../Styles/Button';


const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right:0;
    bottom:0;
    background: rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    #modal {
        background: var(--white-primary);
    }
`;

const Modal = () => {
    const { closeModal, modalOpen, modalProduct } = useContext(ProductContext);
    const { img, price, title } = modalProduct;

    return (
        modalOpen 
        ?
        <ModalContainer onClick={closeModal}>
            <div className="container">
                <div className="row">
                    <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 p-5 text-center text-capitalize">
                        <h5>item added to cart!</h5>
                        <img src={img} className="img-fluid" alt={title} />
                        <h5>{title}</h5>
                        <h5 className="text-muted">price: ${price}</h5>
                        <Link to="/products">
                            <ButtonContainer onClick={closeModal}>
                               back to store
                            </ButtonContainer>
                        </Link>
                        <Link to="/cart">
                            <ButtonContainer cart onClick={closeModal}>
                                go to cart
                            </ButtonContainer>
                        </Link>
                    </div> 
                </div>
            </div>
        </ModalContainer>
        :
        null 
    );
};

export default Modal;
