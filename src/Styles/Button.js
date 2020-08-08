import styled from 'styled-components';

const ButtonContainer = styled.button`
    text-transform: capitalize;
    font-size: 1.4rem;
    background: transparent;
    border: 0.1rem solid var(--blue-secondary);
    border-color: ${props => (props.cart ? "var(--yellow-primary)" : "var(--blue-secondary)")};
    color: ${prop => (prop.cart ? "var(--yellow-primary)" : "var(--blue-secondary)")};
    border-radius: 0.5rem;
    padding: 0.2rem 0.5rem;
    cursor: pointer;
    margin: 0.2rem 0.5rem 0.2rem 0;
    transition: var(--tran-primary);
    &:hover {
        background: ${prop => (prop.cart ? "var(--yellow-primary)" : "var(--blue-secondary)")};
        color: var(--blue-primary);
    }
    &:focus {
        outline: none;
    }
`;

export default ButtonContainer;
