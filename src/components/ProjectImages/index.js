import React from "react";
import { useMediaQuery, ImageList, ImageListItem, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
    },
    imageList: {
      flexWrap: 'nowrap',
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      transform: 'translateZ(0)',
    },
  }));

const ProjectImages = (props) => {
    const images = props.images;
    const matches = useMediaQuery('(min-width:1000px)');

    const appType = props.appType;
    var imgHeight = "100%";
    var imgWidth = "100%";

    const classes = useStyles();

    return (
        //  <Box
        //     // display="flex"            
        //     sx={{
        //         overflowX: 'scroll',
        //         // paddingTop: '2%',
        //         // height: '40vh',

        //         display: "flex",
        //         flexWrap: "wrap",
        //         justifyContent: "space-around",
        //         overflow: "hidden",
        //     }}>
        <div className={classes.root}>
            <ImageList
                className={classes.imageList}
                cols = {2.5}
                // sx={{          
                //     // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
                //     transform: 'translateZ(0)',
                //     paddingX: '2vw',
                //     flexWrap: 'nowrap',
                //     // flexDirection: 'row',
                //     // display: 'flex',     // Sets display to original size
                // }}
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
            </div>
        // </Box>
    )
}

export default ProjectImages;