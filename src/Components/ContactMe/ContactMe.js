import React from 'react';
import { contactData } from '../../PortfolioData';
import ContactLottie from '../DisplayLotti/ContactLottie';
import SocialMediaIcons from '../SocialMediaIcons/SocialMediaIcons';
const ContactMe = () => {
    console.log(contactData);
    return (
        <div className="container mb-5" id="contact">
            <div className="row">
                <div className="col-md-6">
                    <ContactLottie />
                </div>
                <div className="col-md-6 mt-5">
                    <h2 className="text-uppercase">{contactData.title}
                        <p className="weave-imoji">☎️</p>
                    </h2>
                    <div className="text-body text-center text-uppercase">
                        <p className="text-muted ">{contactData.desc}</p>
                        <p >
                            <a className="text-muted" href="">{contactData.phone}</a>
                        </p>
                        <p >
                            <a className="text-muted" href="">{contactData.email}</a>
                        </p>
                    </div>
                    <div className="socialMediaIcons">
                        <SocialMediaIcons/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactMe;