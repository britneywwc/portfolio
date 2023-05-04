import React from 'react'
import Landing from '../pages/Landing';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';
import NavHeader from '../components/NavHeader';
import CurvedText from '../components/CurvedText';

import {Element, animateScroll as scroll} from "react-scroll";
import Box from '@mui/material/Box';
import SelectedWorks from '../components/SelectedWorks';
import projectsData from '../utils/projectsData';



const Routing = () => {
    return (
        <Box sx={{minWidth: '100vw', maxWidth: '100%'}}>
            <NavHeader/>
            {/* <CurvedText/> */}
            
            <Box sx={{minHeight: '130vh'}}>
                <Element name="home" className="element" >
                    <Landing/>
                </Element>
            </Box>

            {/* CURIFY */}
            <Box sx={{minHeight: '260vh'}}>
                <Element name="project-curify" className="element">
                    <SelectedWorks />
                    <Projects currProj={projectsData[0]} bgColor='#23CCB3'/>
                </Element>
            </Box>

            {/* Add div to separate the both */}
            <div id="placeholder"></div>

            {/* MICHAEL SCOTT GPT-3 */}
            <Box sx={{minHeight: '130vh'}}>
                <Element name="project-gpt" className="element">
                    <Projects currProj={projectsData[1]} bgColor='black'/>
                </Element>
            </Box>

            {/* INTREPIDUS */}
            <Box sx={{minHeight: '130vh'}}>
                <Element name="project-intrepidus" className="element">
                    <Projects currProj={projectsData[2]} bgColor='white'/>
                </Element>
            </Box>

            {/* READY2EAT */}

            {/* EXPENSE TRACKER */}

            
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
