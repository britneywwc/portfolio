import React from 'react'
import Error from '../pages/Error';
import Landing from '../pages/Landing';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';
import NavHeader from '../components/NavHeader';

import {Element, animateScroll as scroll} from "react-scroll";


const Routing = () => {
    return (
        <div>
            <NavHeader/>
            
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
