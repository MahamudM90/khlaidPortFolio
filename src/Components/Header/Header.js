import React from 'react';
import './Header.css'
import Typed from 'react-typed';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1 className="text-warning">
                    Hi, I am <span style={{ color: "red" }}>Md Khalid Hossain</span>
                    <p className="weave-imoji">👋</p>
                </h1>
                <Typed
                    className="react-typeing"
                    strings={[
                        'I am looking for an internship',
                        'I am a Frontend-Developer',
                        'I am a Blog Writer',
                        'I am a Youtuber'
                    ]}
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
                            Download Resume
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Header;