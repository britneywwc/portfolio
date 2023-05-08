import React from "react";
import { useMediaQuery, ImageList, ImageListItem, Box } from '@mui/material';


const ProjectImages = (props) => {
    const images = props.images;
    const matches = useMediaQuery('(min-width:1000px)');
    const mobileMatches = useMediaQuery('(min-width:800px)');
    const mobileSmaller = useMediaQuery('(min-width:600px');

    const appType = props.appType;
    
    var colsVal;

    if (appType == "mobile") {
        if (matches) {
            colsVal = 4;
        } else if (mobileMatches) {
            colsVal = 3;
        }
        else if (mobileSmaller) {
            colsVal = 2;
        } else {
            colsVal = 1;
        }
    } else {
        if (matches) {
            colsVal = 2;
        } else {
            colsVal = 1;
        }
    }

    return (
        <Box
            display="flex"
            sx={{
                bgcolor: "grey",
                minWidth: '100vw',
                justifyContent: 'center',
                alignItems: 'center',
                // height: '10vh',
                // overflow: 'scroll',
            }}
            >
            <ImageList
                cols = {colsVal}
                sx={{          
                    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
                    transform: 'translateZ(0)',
                    paddingX: '2vw',
                    // gridAutoFlow: "column",
                    // gridTemplateColumns: "repeat(auto-fill,minmax(40vw, 80vw)) !important",
                    // gridAutoColumns: "minmax(40vw, 80vw)",
                    // flexWrap: 'nowrap',

                }}>
                {images.map((item) => (
                    <ImageListItem key={item} sx={{display: 'flex', flexDirection: 'row'}}>
                    <img
                        src={item}
                        srcSet={item}
                        loading="lazy"
                        alt="project images"
                        style={{
                            borderRadius: '1%',
                            maxWidth: '100%',
                            maxHeight: '100%',
                            display: 'block',
                        }}
                        />

                    </ImageListItem>
                ))}
                </ImageList>
        </Box> 
    )
}

export default ProjectImages;