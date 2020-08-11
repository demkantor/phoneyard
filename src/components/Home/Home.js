import React from 'react';
import Title from '../../Styles/Title';

const Home = () => {
    return (
        <>
            <div className="hero"></div>
            <div className="row middle">
                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                    <Title name="Welcome to the" title="Phoneyard" />
                </div>
                <h5 className="text-center hide">Don't send your old phone to the boneyard, sell it at the phoneyard!</h5>
                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                    <p>
                    "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
                    </p>
                </div>
            </div>
        </>
    );
};

export default Home;
