import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Error from '../pages/Error';
import Landing from '../pages/Landing';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';

const Routing = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Landing/>}/>    
            <Route exact path="/projects" element={<Projects />}/>
            <Route exact path="/contact" element={<Contact />}/>
            <Route exact path="*" element={<Error/>}/>            
        </Routes>

    )
}

export default Routing
