import React from 'react';
import { skills } from '../../PortfolioData';
import DisplayLotti from '../DisplayLotti/DisplayLotti';
import Fade from 'react-reveal/Fade';


const Skill = () => {
    console.log(skills);
    return (
        <div className="mt-5 mb-5 container">
            <div className="row">
                <Fade>
                    <div className="col-md-5">
                        <DisplayLotti />
                    </div>
                    <div className="col-md-6 ml-5">
                        <h2 className="text-uppercase">{skills.title}</h2>
                        <h6 className="mt-3">{skills.desc}</h6>
                        {
                            skills.skillTitle.map((title, index) => <h5 id={index} className="mt-3">{title}</h5>)
                        }
                        <div className="softwereSkills mt-3">
                            <div className="row">
                                {
                                    skills.softwareSkills.map((skill, index) => <div id={index} className="col-md-2 col-sm-2">
                                        <span id="skillIcons">{skill.icon}</span>
                                        <p>{skill.skillName}</p>
                                    </div>)
                                }
                            </div>
                        </div>
                    </div>
                </Fade >
            </div>
        </div>
    );
};

export default Skill;