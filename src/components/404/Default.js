import React from 'react';

const Default = ( props ) => {
    
    return (
        <div className="container">
            <div className="row">
                <div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
                    <h1 className="display-3">404</h1>
                    <h1>Error</h1>
                    <h2>page not found</h2>
                    <h3>
                        the requested URL
                        <span className="text-danger">
                            {props.location.pathname}
                        </span>
                        {" "}
                        was not found
                    </h3>
                </div>
                <h3 className="mx-auto text-center pt-5">use navbar to take you to products or cart</h3>
            </div>
        </div>
    );
};

export default Default;
