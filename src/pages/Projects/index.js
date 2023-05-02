import React from "react";
import Grid from '@mui/material/Grid';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';

import { GridBreak } from "../../components/GridBreak";
import ProjectTitle from '../../components/ProjectTitle';
import ProjectInfo from "../../components/ProjectInfo";


import '../../index.css';
import projectsData from '../../utils/projectsData.js';



const Projects = (props) => {
    var currProj = projectsData[0];

    return (
        <div id="page__projects">
            <Grid container>

                <Grid item xs={4}>                    
                    <div className="project__title__h1"> SELECTED 
                        <div className="project__title__h1__sub">WORKS</div>
                    </div>
                </Grid>
                <GridBreak/>

                <ProjectTitle currProj = {projectsData[0]}/>
                <ProjectInfo currProj={projectsData[0]}/>

                

                                              
                </Grid>
        </div>
    )
}

export default Projects;