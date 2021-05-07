import React from 'react';
import Lottie from 'react-lottie';
import SkillBar from 'react-skillbars';
import { techStack } from '../../PortfolioData';
import ProficiancyLottie from '../DisplayLotti/ProficiancyLottie';
import Fade from "react-reveal"

const SkillProgreess = () => {
    const skills = [
        { type: "Java", level: 20 },
        { type: "Javascript", level: 75 },
    ];

    const colors = {
        bar: '#3498db',
        title: {
            text: '#fff',
            background: '#2980b9'
        }
    }
    return (
        <div className="container">
            <div className="row">
                <Fade left>
                    <div className="col-md-6">
                        <h2 className="mb-3 text-uppercase">Proficiency</h2>
                        <SkillBar skills={techStack} animationDuration={2000} colors={colors} height={25} />
                    </div>
                </Fade>
                <Fade right >
                    <div className="col-md-6 mt-5">
                        <ProficiancyLottie />
                    </div>
                </Fade>
            </div>
        </div>
    );
};

export default SkillProgreess;