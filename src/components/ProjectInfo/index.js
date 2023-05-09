import React from "react";
import { Grid, Card, CardMedia } from '@mui/material';


const ProjectInfo = (props) => {
    const currProj = props.currProj;
    const bgColor = props.bgColor;
    
    return (
        <Grid container
            spacing={0}
            direction="column" 
            alignItems="center" 
            justify="center"  
            paddingX="2vw"
            height="70%"
            >
            <Grid item 
            // sx={{height:"80vh"}}
            >
                <Card
                    sx={{
                        zIndex: -1,
                        minWidth: '95vw',
                        height: '55vh',
                        backgroundColor: bgColor,  
                        marginTop: '2vh',                      
                    }}
                    >
                    <CardMedia
                        component="img"
                        height="100%"
                        image={currProj.main_image}
                        alt="project image"
                        sx={{objectFit: "contain" }}                            
                    /> 
                </Card>

                <div className="project__info">
                    <span className="project__desc">{currProj.description}</span>
                    <span className="project__stack">{currProj.stack.toUpperCase()}
                        <span className="project__stack__link" ><br/>→ {currProj.link_desc}                                                                          
                            <a href={currProj.link} target="_blank" rel="noopener noreferrer">                            
                                HERE
                            </a>.
                        </span>
                    </span>                            
                </div>                        
            </Grid>
        
        </Grid> 
    );
}

export default ProjectInfo;