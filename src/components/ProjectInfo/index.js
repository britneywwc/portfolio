import React from "react";
import { Grid, Card, CardMedia } from '@mui/material';

const ProjectInfo = (props) => {
    const currProj = props.currProj;
    
    return (
            <Grid container 
                spacing={0} 
                direction="column" 
                alignItems="center" 
                justify="center" 
                marginTop="5em" 
                marginLeft="1em" 
                marginRight="1em">
                <Grid item>
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
                            image={currProj.main_image}
                            alt="sample"
                            sx={{objectFit: "contain" }}

                        /> 
                    </Card>

                    <div className="project__info">
                        <span className="project__desc">{currProj.description}</span>
                        <span className="project__stack">{currProj.stack.toUpperCase()}
                            <span className="project__stack__link" ><br/>→ CHECK OUT THE ONGOING PROJECT                                                                          
                                <a href="https://github.com/Apple-Piethon/curify" target="_blank" rel="noopener noreferrer">                            
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