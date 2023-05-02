import React from 'react'
import Landing from '../pages/Landing';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';
import NavHeader from '../components/NavHeader';
import CurvedText from '../components/CurvedText';

import {Element, animateScroll as scroll} from "react-scroll";
import Box from '@mui/material/Box';



const Routing = () => {
    return (
        <Box sx={{width: '100%'}}>
            <NavHeader/>
            {/* <CurvedText/> */}
            
            <Box sx={{height: '130vh'}}>
                <Element name="home" className="element" >
                    <Landing/>
                </Element>
            </Box>

            <Box sx={{height: '260vh'}}>
                <Element name="project0" className="element">
                    <Projects/>
                </Element>
            </Box>

            {/* <Box sx={{height: '130vh'}}>
                <Element name="project1" className="element">
                    <Projects/>
                </Element>
            </Box> */}
            
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
