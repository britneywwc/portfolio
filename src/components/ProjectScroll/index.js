import React from "react"
import { useMediaQuery } from '@mui/material';

const ProjectScroll = props => {
    const images = props.images;
    const appType = props.appType;
    const mobileView = useMediaQuery('(min-width:800px)');

    var imgHeight, imgWidth;

    if (appType === "web") {
        if (mobileView) {
            imgHeight = '60vh';
            imgWidth = '60vw';
        } else {
            imgHeight = '60vw';
            imgWidth = '60vh';
        }
    } else {
        if (mobileView) {
            imgHeight = '50vw';
            imgWidth = '50vh';
        } else {
            imgHeight = '50vh';
            imgWidth = '50vw';
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