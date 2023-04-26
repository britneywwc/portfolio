import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import { GridBreak } from "../../components/GridBreak";

import '../../index.css';
import projectsData from '../../utils/projectsData.json';



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

                <Grid item xs={4}>
                    <div>
                        <div className="project__card__title__text">
                            <span className="project__card__title__number">0{currProj.id}.</span>
                            {currProj.title}

                        <Paper
                            sx={{
                                zIndex: -1,
                                height: '50vh',
                                position: 'relative',
                                // width: '100vw',
                                backgroundColor: 'grey',

                            }}
                            >
                        </Paper>
                        </div>         
                    </div>
                </Grid>

                



                    
                </Grid>


        </div>
    )
}

export default Projects