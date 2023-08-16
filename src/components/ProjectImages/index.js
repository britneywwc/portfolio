import React from "react";
import { useMediaQuery, ImageList, ImageListItem, Box } from '@mui/material';

const ProjectImages = (props) => {
    const images = props.images;
    const matches = useMediaQuery('(min-width:1000px)');
    const appType = props.appType;

    return (
         <Box
            // display="flex"            
            sx={{
                overflowX: 'scroll',
                // paddingTop: '2%',
                // height: '40vh',

                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-around",
                overflow: "hidden",
            }}>
            <ImageList
                cols = {2.5}
                sx={{          
                    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
                    transform: 'translateZ(0)',
                    paddingX: '2vw',
                    flexWrap: 'nowrap',
                    // flexDirection: 'row',
                    // display: 'flex',     // Sets display to original size
                }}
                >
                {images.map((item) => (
                    <ImageListItem 
                        key={item} 
                        // sx={{
                        //     margin: '1%',
                        //     flex: '0 0 auto',
                        // }}
                        >
                    <img
                        src={item}
                        srcSet={item}
                        loading="lazy"
                        alt="project images"
                        style={{
                            borderRadius: '1%',
                            // display: 'block',
                            // objectFit: 'contain',    // Sets the image as original sizes
                        }}
                        />

                    </ImageListItem>
                ))}
                </ImageList>
        </Box>
    )
}

export default ProjectImages;