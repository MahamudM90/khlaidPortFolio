import React, { useEffect } from 'react';
import './Header.css'
import Typed from 'react-typed';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { greeting, socialMediaLinks } from '../../PortfolioData';
import libery from '../../FontAwsomeLibery'


libery();

const Header = () => {
    return (
        <div className="header-wrapper" id="home">
            <div className="main-info">
                <h4 className="text-warning text-start"> {greeting.title}</h4>
                <h1 className="text-warning">
                    <span className="animationColor">{greeting.username}</span>
                    <span className="weave-imoji">👋</span>
                </h1>
                <Typed
                    className="react-typeing"
                    strings={[
                        'I am looking for an internship',
                        'A Frontend-Developer',
                        'A Tech Writer',
                        'A Youtuber'
                    ]}
                    typeSpeed={30}
                    backSpeed={40}
                    loop
                />
                <p className="greetingSubtitle text-white">{greeting.subTitle}</p>
                <div className="mainOffer d-flex myNav">
                    <a href="#contact" className="mr-2">
                        <button className="btn btn-lg btn-outline-warning">
                            Contact me
                        </button>
                    </a>
                    <a href={greeting.resumeLink} className="">
                        <button className="btn btn-lg btn-outline-warning">
                            <FontAwesomeIcon icon={faDownload} className="mr-2" />
                            Download Resume
                        </button>
                    </a>
                </div>
                <div className="icons d-flex">
                    {
                        socialMediaLinks.github && <a className="text-white" id="github" href={socialMediaLinks.github}
                            target="_blank"
                        >
                            <FontAwesomeIcon icon={['fab', 'github']} />
                        </a>
                    }
                    {
                        socialMediaLinks.facebook && <a className="text-white" id="facebook" href={socialMediaLinks.facebook}
                            target="_blank"
                        >
                            <FontAwesomeIcon icon={['fab', 'facebook']} />
                        </a>
                    }
                    {
                        socialMediaLinks.instagram && <a className="text-white" id="instagram" href={socialMediaLinks.instagram}
                            target="_blank"
                        >
                            <FontAwesomeIcon icon={['fab', 'instagram']} />
                        </a>
                    }
                    {
                        socialMediaLinks.linkedin && <a className="text-white" id="linkedin" href={socialMediaLinks.linkedin}
                            target="_blank"
                        >
                            <FontAwesomeIcon icon={['fab', 'linkedin']} />
                        </a>
                    }

                    {
                        socialMediaLinks.twitter && <a className="text-white" id="twitter" href={socialMediaLinks.twitter}>
                            <FontAwesomeIcon icon={['fab', 'twitter']} />
                        </a>
                    }
                    {
                        socialMediaLinks.stackoverflow && <a className="text-white" id="stackOverflow" href={socialMediaLinks.stackoverflow}>
                            <FontAwesomeIcon icon={['fab', 'stack-overflow']} />
                        </a>
                    }
                    {
                        socialMediaLinks.gmail && <a className="text-white" id="gamil" href={`mailto:${socialMediaLinks.gmail}`}>
                            <FontAwesomeIcon icon={['fab', 'google']} />
                        </a>
                    }
                    {
                        socialMediaLinks.medium && <a className="text-white" id="medium" href={socialMediaLinks.medium}>
                            <FontAwesomeIcon icon={['fab', 'medium']} />
                        </a>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;