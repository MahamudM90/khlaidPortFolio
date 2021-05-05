import React from 'react';
import { experience } from '../../PortfolioData';
import ExpricenceCard from '../ExpricenceCard/ExpricenceCard';


const Exprience = () => {

    return (
        <div className="container mb-5 shadow p-2" id="exprience">
            <h2 className="text-uppercase mb-3">Projects</h2>
            <div className="row d-sm-flex justify-content-sm-center align-items-sm-center d-flex justify-content-center align-items-center">
                {
                    experience.map((exprience, index) => <ExpricenceCard exprience={exprience} id={index} />)
                }
            </div>
        </div>
    );
};

export default Exprience;