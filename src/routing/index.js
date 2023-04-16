import React from 'react'
import Error from '../pages/Error';
import Landing from '../pages/Landing';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';

import {Link, Element, animateScroll as scroll} from "react-scroll";
import NavButton from '../components/NavButton';


const Routing = () => {
    return (
        <div>
            <div className="nav__header">
                <NavButton>
                    <Link activeClass="active" className="home" to="home" spy={true} smooth={true} duration={500}>HOME</Link>
                </NavButton>

                <NavButton>
                    <Link activeClass="active" className="projects" to="projects" spy={true} smooth={true} duration={1000}>PROJECTS</Link>
                </NavButton>

                <NavButton>
                    <Link activeClass="active" className="contact" to="contact" spy={true} smooth={true} duration={1000}>CONTACT</Link>
                </NavButton>
            </div>

                <div className="content">
                    <Element name="home" className="element" >
                        <Landing/>
                    </Element>

                    <Element name="projects" className="element">
                        <Projects/>
                    </Element>

                    <Element name="contact" className="element">
                        <Contact/>
                    </Element>
                </div>            
        </div>

    )
}

export default Routing
