import { useEffect, useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo.svg';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
} from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import linkedInIcon from '../assets/img/linkedInIcon.svg';
import instagramIcon from '../assets/img/instagramIcon.svg';
import githubIcon from '../assets/img/githubIcon.svg';
import Projects from "./projectPage/projects.js";
import Home from "../App";



export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, seScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                seScrolled(true)
            } else {
                seScrolled(false)
            }
        }
        
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActivateLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Router>
            <Navbar  expand="md" className={scrolled ? "scrolled": ""}>
                <Container>
                    <Navbar.Brand href="/">
                        <h1 style={{color: 'white'}}>VAV</h1>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                        <span className="navbar-toggler-icon"></span>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="/" className={activeLink === 'home' ? 'active navbar-link' : "navbar-link"} onClick={() => onUpdateActivateLink('home')}>Home</Nav.Link>
                        <Nav.Link href='#resume' className={activeLink === 'resume' ? 'active navbar-link' : "navbar-link"} onClick={() => onUpdateActivateLink('resume')}>Resume</Nav.Link>
                        <Nav.Link href='#projects' className={activeLink === 'projects' ? 'active navbar-link' : "navbar-link"} onClick={() => onUpdateActivateLink('project')}>Projects</Nav.Link>
                        <Nav.Link href="#link" className={activeLink === 'academics' ? 'active navbar-link' : "navbar-link"} onClick={() => onUpdateActivateLink('academics')}>Academics</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/vilhjalmur-arnar-vilhjalmsson/" target="_blank"><img src={linkedInIcon} alt=""/></a>
                            <a href="https://www.instagram.com/vilhjalmurarnar/" target="_blank"><img src={instagramIcon} alt=""/></a>
                            <a href="https://github.com/villi02" target="_blank"><img src={githubIcon} alt=""/></a>
                        </div>
                        <HashLink to='#connect'>
                            <button className="vvd" onClick={() => console.log('connect')}><span>Let's Connect</span></button>
                        </HashLink>
                    </span>
                    </Navbar.Collapse>
                </Container>
                </Navbar>         
        </Router>
    )
}