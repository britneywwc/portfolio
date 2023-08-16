import React from "react"
import { useMediaQuery } from '@mui/material';

const ProjectScroll = props => {
    const images = props.images;
    const appType = props.appType;
    const mobileView = useMediaQuery('(max-width:800px)');

    var imgHeight, imgWidth;

    if (appType === "web") {
        if (mobileView) {
            imgHeight = '30vh';
            imgWidth = '90vw';
        } else {
            imgHeight = '50vh';
            imgWidth = '50vw';
        }
    } else {
        if (mobileView) {
            imgHeight = '60vh';
            imgWidth = '70vw';
        } else {
            imgHeight = '50vw';
            imgWidth = '50vh';
        }
    }
    
    

    return (
        <div className="project__container">
            {images.map(image => (
                <div 
                    key={image}
                    className="project__card"
                    style=
                    {{
                        backgroundImage: `url(${image})`,
                        width: `${imgWidth}`,
                        height: `${imgHeight}`,
                    }}
                />
            ))}
        </div>
    )
}

export default ProjectScroll;