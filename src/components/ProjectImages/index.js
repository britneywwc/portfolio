import React from "react";
import { Grid, ImageList, ImageListItem } from '@mui/material';


const ProjectImages = (props) => {
    const images = props.images;
    return (
        <Grid item>
            <ImageList cols={2} sx={{
                // WIP HERE
                flexWrap: 'nowrap',
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