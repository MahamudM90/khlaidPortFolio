import logo from './logo.svg';
import './App.css';
import HeaderNavbar from './Components/Navbar/HeaderNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header'
import Particles from 'react-particles-js';


function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
