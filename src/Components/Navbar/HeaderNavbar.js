import React from 'react';
import { Button, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './HeaderNavbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { remuseLInk } from '../../PortfolioData';



const HeaderNavbar = () => {
    

    return (
        <Navbar className="myNav " bg="dark" expand="lg" sticky="top">
            <div className="container">
                <Navbar.Brand href="#home" className="brand">
                    <h4>
                        <span>&#60;</span> MD KHALID HOSSAON &#47; <span>&#62;</span>
                    </h4>
                </Navbar.Brand>


                <Navbar.Toggle aria-controls="basic-navbar-nav" />


                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto navbarFonts">
                        <Nav.Link href="#contact" className="navbarColors ml-3 link">Contact me</Nav.Link>
                        <Nav.Link href={remuseLInk.link} target="_blank" className="navbarColors ml-3 link" >Resume</Nav.Link>
                        <Nav.Link href="#blog" className="navbarColors ml-3 link" >Blog</Nav.Link>
                        <Nav.Link href="#skill" className="navbarColors ml-3 link" >skill</Nav.Link>
                        <Nav.Link href="#exprience" className="navbarColors ml-3 link" >Projects</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
};

export default HeaderNavbar;