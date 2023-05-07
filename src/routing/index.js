import React, { useState } from 'react'
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
    const [showNav, setShowNav] = useState(false);

    return (
        <Box sx={{minWidth: '100vw', maxWidth: '100%'}}>
            <NavHeader showNav={showNav} setShowNav={setShowNav}/>
            {/* <CurvedText/> */}
            
            <Box sx={{minHeight: '130vh'}} onClick={() => setShowNav(false)}>
                <Element name="home" className="element" >
                    <Landing/>
                </Element>
            </Box>

            {/* CURIFY */}
            <Box sx={{minHeight: '260vh'}} onClick={() => setShowNav(false)}>
                <div id="placeholder"/>
                <Element name="project-curify" className="element">
                    <SelectedWorks />
                    <Projects currProj={projectsData[0]} bgColor='#23CCB3'/>
                </Element>
            </Box>
            <div id="placeholder"/>


            {/* MICHAEL SCOTT GPT-3 */}
            <Box sx={{minHeight: '130vh'}} onClick={() => setShowNav(false)}>
                <Element name="project-gpt" className="element">
                    <div id="placeholder"/>
                    <Projects currProj={projectsData[1]} bgColor='black'/>
                </Element>
            </Box>

            {/* can make the placeholder take more space */}
            <div id="placeholder"/>

            {/* INTREPIDUS */}
            <Box sx={{minHeight: '130vh'}} onClick={() => setShowNav(false)}>
                <Element name="project-intrepidus" className="element">
                    <div id="placeholder"/>
                    <Projects currProj={projectsData[2]} bgColor='white'/>
                </Element>
            </Box>

            {/* READY2EAT */}
            <Box sx={{minHeight: '130vh'}} onClick={() => setShowNav(false)}>
                <Element name="project-eat" className="element">
                    <div id="placeholder"/>
                    <Projects currProj={projectsData[3]} bgColor='white'/>
                </Element>
            </Box>

            {/* EXPENSE TRACKER */}
            <Box sx={{minHeight: '130vh'}} onClick={() => setShowNav(false)}>
                <Element name="project-expense" className="element">
                    <div id="placeholder"/>
                    <Projects currProj={projectsData[4]} bgColor='white'/>
                </Element>
            </Box>



            
            <Box 
                display="flex"
                justifyContent="center"
                alignItems="center"
                minHeight="100vh"
                onClick={() => setShowNav(false)}>
                <Element name="contact" className="element">
                    <Contact/>
                </Element>
            </Box>
        
          
        </Box>

    )
}

export default Routing
