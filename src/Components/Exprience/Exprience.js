import React from 'react';
import { experience } from '../../PortfolioData';
import ExpricenceCard from '../ExpricenceCard/ExpricenceCard';


const Exprience = () => {

    return (
        <div className="container mb-5">
            <h2 className="text-uppercase mb-3">Projects</h2>
            <div className="row">
                {
                    experience.map((exprience, index) => <ExpricenceCard exprience={exprience} id={index} />)
                }
            </div>
        </div>
    );
};

export default Exprience;