import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from './components/Nav/Navbar';
import ProductList from './components/Product/ProductList';
import Details from './components/Product/Details';
import Cart from './components/Cart/Cart';
import Default from './components/404/Default';


const App = () => {
    return (
        <Router>
            <Navbar />
            <h3>Hello from App</h3>
            
                <ProductList />
                <Details />
                <Cart />
                <Default />
            
        </Router>  
    );
};

export default App;
