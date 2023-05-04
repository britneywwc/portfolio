import React from "react";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import { GridBreak } from "../../components/GridBreak";
import ProjectTitle from '../../components/ProjectTitle';
import ProjectInfo from "../../components/ProjectInfo";

import '../../index.css';
import projectsData from '../../utils/projectsData.js';
import ProjectImages from "../../components/ProjectImages";
import downIcon from '../../assets/icons/down-arrow.png';




const Projects = (props) => {
    return (
        <div id="page__projects">
            <Grid container>

                
                <GridBreak/>
                <Box sx={{minHeight:"100vh"}}>
                    <ProjectTitle currProj = {projectsData[0]}/>                                                                                
                    <ProjectInfo currProj={projectsData[0]}/>                    
                </Box>

                {/* <img className="down__icon"src={downIcon} alt="down icon"/> */}                

                <Box sx={{minHeight:"100vh", zIndex:"-1"}}>                            
                    {projectsData[0].images.length > 1 ? <ProjectImages images={projectsData[0].images}/> : null}
                </Box>
                <GridBreak/>
                
            </Grid>
        </div>
    )
}

export default Projects;