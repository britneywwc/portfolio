import React from 'react'
import Error from '../pages/Error';
import Landing from '../pages/Landing';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';
import NavHeader from '../components/NavHeader';

import {Element, animateScroll as scroll} from "react-scroll";
import Box from '@mui/material/Box';


const Routing = () => {
    return (
        <Box sx={{width: '100%'}}>
            <NavHeader/>

            
            <Box sx={{height: '130vh'}}>

                <Element name="home" className="element" >
                    <Landing/>
                </Element>
            </Box>

            <Box sx={{height: '130vh'}}>
                <Element name="projects" className="element">
                    <Projects/>
                </Element>
            </Box>
            
            <Box 
                display="flex"
                justifyContent="center"
                alignItems="center"
                minHeight="100vh">
                <Element name="contact" className="element">
                    <Contact/>
                </Element>
            </Box>
        
          
        </Box>

    )
}

export default Routing
