import React from "react";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';

import { GridBreak } from "../../components/GridBreak";

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

                <Grid item xs={4}>
                    <div>
                        <div className="project__card__title__text">
                            <span className="project__card__title__number">0{currProj.id}.</span>
                            {currProj.title}
                        </div>
                        </div>
                </Grid>

                <Grid container spacing={0} direction="column" alignItems="center" justify="center" marginTop="5em">
                    <Grid item margin="1em">
                            <Card
                                sx={{
                                    zIndex: -1,
                                    width: '95vw',
                                    height: "60vh",
                                    backgroundColor: '#23CCB3',
                                    
                                }}
                                >  
                                <CardMedia
                                    component="img"
                                    height="100%"
                                    image={currProj.image[0]}
                                    alt="sample"
                                    sx={{objectFit: "contain" }}

                                /> 
                            </Card>
                            <div className="project__info">

                                <span className="project__desc">{currProj.description}
                                    <span className="project__desc__link" ><br/>→ Check out the ongoing project                                                                             
                                        <a href="https://github.com/Apple-Piethon/curify" target="_blank" rel="noopener noreferrer">
                                    
                                         here
                                        </a>.
                                    </span>
                                    </span>
                                <span className="project__stack">{currProj.stack.toUpperCase()}</span>
                                
                            </div>

                            
                        </Grid>
                    </Grid>                                
                </Grid>
        </div>
    )
}

export default Projects