import React from "react";
import { Grid, useMediaQuery, ImageList, ImageListItem } from '@mui/material';



const ProjectImages = (props) => {
    const images = props.images;
    const matches = useMediaQuery('(min-width:1000px)');

    return (
        <Grid item>
            <ImageList 
                cols={matches ? 2 : 1}
                sx={{          
                // WIP HERE
                
                // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
                transform: 'translateZ(0)',
            }}>
                {images.map((item) => (
                    <ImageListItem key={item}>
                    <img
                        src={item}
                        srcSet={item}
                        loading="lazy"
                        alt="project images"
                        />
                    </ImageListItem>
                ))}
                </ImageList>
        </Grid> 
    )
}

export default ProjectImages;