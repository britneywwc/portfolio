import React from "react";
import { Grid, Card, CardMedia, ImageList, ImageListItem } from '@mui/material';


const ProjectInfo = (props) => {
    const currProj = props.currProj;
    
    return (
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
                            image={currProj.main_image}
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
                
                {currProj.images.length > 1 ? 
                <Grid item>
                    <ImageList cols={2} sx={{

                        flexWrap: 'nowrap',
                        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
                        transform: 'translateZ(0)',
                    }}>
                        {currProj.images.map((item) => (
                            <ImageListItem key={item}>
                            <img
                                src={item}
                                srcSet={item}
                                loading="lazy"
                                />
                            </ImageListItem>
                        ))}
                        </ImageList>
                </Grid> 
                : null
                }
            </Grid> 
    );
}

export default ProjectInfo;