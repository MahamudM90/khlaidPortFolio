import React from 'react';
import Blogs from '../Blogs/Blogs';
import ContactForm from '../ContactForm/ContactForm';
import ContactMe from '../ContactMe/ContactMe';
import Exprience from '../Exprience/Exprience';
import Footer from '../Footer/Footer';
import Gohome from '../GoHome/Gohome';
import Header from '../Header/Header';
import HeaderNavbar from '../Navbar/HeaderNavbar';
import SkillProgreess from '../SkillProgreess/SkillProgreess';
import Skill from '../Skills/Skill';
import Particles from 'react-particles-js';
import DisplayLotti from './Components/DisplayLotti/DisplayLotti';

const MainPage = () => {
    return (
        <div>
            <Particles
                params={{
                    particles: {
                        number: {
                            value: 30,
                            density: {
                                enable: true,
                                value_area: 1000
                            }
                        },
                        shape: {
                            type: 'circle',
                            stroke: {
                                width: 6,
                                color: "#f9ab00"
                            }
                        }
                    }
                }}
            />
            <HeaderNavbar />
            <Header />
            <Skill />
            <SkillProgreess />
            <Exprience />
            <Blogs />
            <ContactMe />
            <ContactForm />
            <Footer />
            <Gohome />
        </div>
    );
};

export default MainPage;