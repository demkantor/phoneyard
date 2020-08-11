import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logo.svg';
import styled from 'styled-components';
import ButtonContainer from '../../Styles/Button';

const NavWrapper = styled.nav`
    background: var(--blue-primary);
    .nav-link {
        color: var(--white-primary) !important;
        font-size: 1.3rem;
        text-transform: capitalize;
    }
`;

const Navbar = () => {
    return (
        <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
            {/* 
            https://www.iconfinder.com/icons/1243689/call_phone_icon
            Creative Commons (Attribution 3.0 Unported);
            https://www.iconfinder.com/Makoto_msk 
            */}
            <Link to="/">
                <img title="phoneyard inventory" src={logo} alt="store" className="nav-brand" />
            </Link>
            <ul className="navbar-nav align-items-center">
                <li className="nav-item ml-5">
                    <Link to="/" className="nav-link">
                        products
                    </Link>
                </li>
            </ul>
            <Link title="head to cart" to="/cart" className="ml-auto">
                <ButtonContainer>
                    <span className="mr-2">
                        <i className="fas fa-cart-plus" />
                    </span>
                    my cart
                </ButtonContainer>
            </Link>
        </NavWrapper>
    );
};

export default Navbar;
