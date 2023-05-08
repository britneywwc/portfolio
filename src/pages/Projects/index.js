import React from "react";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import { GridBreak } from "../../components/GridBreak";
import ProjectTitle from '../../components/ProjectTitle';
import ProjectInfo from "../../components/ProjectInfo";

import '../../index.css';
import ProjectImages from "../../components/ProjectImages";
import downIcon from '../../assets/icons/down-arrow.png';


const Projects = (props) => {
    return (
        <div id="page__projects">
            <Grid container>
                
                <GridBreak/>
                {/* Project title and info */}
                <Box sx={{minHeight:"90vh"}}>
                    <ProjectTitle currProj = {props.currProj}/>                                                                                
                    <ProjectInfo currProj={props.currProj} bgColor={props.bgColor}/>                    
                </Box>                            

                {/* Additional project images */}
                {props.currProj.images.length > 1 ? 
                    <Box sx={{
                        minHeight:"100vh", 
                        zIndex:"-1", 
                        maxWidth: "100%",
                    }}>
                        <ProjectImages images={props.currProj.images} appType={props.currProj.app_type}/>
                        
                    </Box> 
                : null}
    
            <GridBreak/>
            </Grid>
        </div>
    )
}

export default Projects;