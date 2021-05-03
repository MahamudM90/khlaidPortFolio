import logo from './logo.svg';
import './App.css';
import HeaderNavbar from './Components/Navbar/HeaderNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header'
import Particles from 'react-particles-js';
import DisplayLotti from './Components/DisplayLotti/DisplayLotti';
import Skill from './Components/Skills/Skill';
import SkillProgreess from './Components/SkillProgreess/SkillProgreess';
import Exprience from './Components/Exprience/Exprience';
import Blogs from './Components/Blogs/Blogs';
import ContactMe from './Components/ContactMe/ContactMe';
import Footer from './Components/Footer/Footer';
import ContactForm from './Components/ContactForm/ContactForm';


function App() {
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
            shape : {
              type : 'circle' , 
              stroke : {
                width  : 6, 
                color : "#f9ab00"
              }
            }
          }
        }}
      />
      <HeaderNavbar />
      <Header />
      <Skill/>
      <SkillProgreess/>
      <Exprience/>
      <Blogs/>
      <ContactMe/>
      <ContactForm/>
      <Footer/>
    </div>
  );
}

export default App;
