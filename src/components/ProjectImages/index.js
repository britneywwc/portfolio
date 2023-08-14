import React from "react";
import { useMediaQuery, ImageList, ImageListItem, Box } from '@mui/material';


const ProjectImages = (props) => {
    const images = props.images;
    const matches = useMediaQuery('(min-width:1000px)');

    const appType = props.appType;
    var imgHeight;

    // DESKTOP VIEW
    if (matches) {
        if (appType === "mobile") {
            imgHeight = '50vw'

        } else {
            imgHeight = '50vh'

        }
    // MOBILE OR OTHER
    } else {
        if (appType === "mobile") {
            imgHeight = '50vh'
        } else {
            imgHeight = '60vw'
        }
    }

    return (
         <Box
            display="flex"            
            sx={{
                overflowX: 'scroll',
                paddingTop: '2%',
                maxHeight: `${imgHeight}`,
            }}>
            <ImageList
                cols = {images.length}
                sx={{          
                    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
                    transform: 'translateZ(0)',
                    paddingX: '2vw',
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'nowrap',
                }}>
                {images.map((item) => (
                    <ImageListItem 
                        key={item} 
                        sx={{
                            margin: '1%',
                            flex: '0 0 auto',

                        }}>
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