import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Cart from './components/Cart/Cart';
import Default from './components/404/Default';
import Details from './components/Product/Details';
import Modal from './components/Product/Modal';
import Navbar from './components/Nav/Navbar';
import ProductList from './components/Product/ProductList';


const App = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/" component={ProductList} />
                <Route exact path="/details" component={Details} />
                <Route exact path="/cart" component={Cart} />
                <Route exact path="*" component={Default} />
            </Switch>
            <Modal />
        </Router>  
    );
};

export default App;
