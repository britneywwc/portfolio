import React from "react";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import { GridBreak } from "../../components/GridBreak";
import ProjectTitle from '../../components/ProjectTitle';
import ProjectInfo from "../../components/ProjectInfo";

import '../../index.css';
import ProjectImages from "../../components/ProjectImages";


const Projects = (props) => {
    return (
        <div id="page__projects">
            <Grid container>                
                <GridBreak/>

                {/* Project title and info */}
                <Box sx={{minHeight:"6vw"}}>
                    <ProjectTitle currProj = {props.currProj}/>                                                                           {/*  */}
                </Box>                            

                <ProjectInfo currProj={props.currProj} bgColor={props.bgColor}/>

                {/* <GridBreak/> */}
            </Grid>

                {/* Additional project images */}
                {props.currProj.images.length > 1 ? 
                    <Box sx={{
                        minHeight:"10%", 
                        zIndex:"-1",
                    }}>
                        <ProjectImages images={props.currProj.images} appType={props.currProj.app_type}/>
                    </Box> 
                : null}
    
        </div>
    )
}

export default Projects;