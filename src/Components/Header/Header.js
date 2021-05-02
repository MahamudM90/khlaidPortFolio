import React from 'react';
import './Header.css'
import Typed from 'react-typed';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1 className="text-warning">this is my header</h1>
                <Typed
                    className="react-typeing"
                    strings={['web design', 'web development', 'facebook adds']}
                    typeSpeed={40}
                    backSpeed={40}
                    loop
                />
                <div className="mainOffer d-flex myNav">
                    <a href="#" className="mr-2">
                        <button className="btn btn-lg btn-outline-warning">
                            Contact me
                        </button>
                    </a>
                    <a href="#" className="">
                        <button className="btn btn-lg btn-outline-warning">
                            <FontAwesomeIcon icon={faDownload} className="mr-2" />
                            Contact me
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Header;