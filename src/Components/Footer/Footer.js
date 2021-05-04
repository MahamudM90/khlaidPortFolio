import { Copyright } from '@material-ui/icons';
import React, { useState } from 'react';
import { footerData } from '../../PortfolioData';

const Footer = () => {
    const [newDate ] = useState(new Date())
    return (
        <div className="container mt-5 mb-5 text-center">
            <p className="text-muted text-uppercase"> {footerData.desc}</p>
            <p className="text-muted text-uppercase"> 
                copywrite <Copyright/> {newDate.getFullYear()}  
                <a href={footerData.url}>Md Khalid Hossain</a>
            </p>
        </div>
    );
};

export default Footer;