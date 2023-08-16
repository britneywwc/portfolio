import React from "react"
import { useMediaQuery } from '@mui/material';

const ProjectScroll = props => {
    const images = props.images;
    const appType = props.appType;
    const desktopView = useMediaQuery('(min-width:1000px)');

    var imgHeight, imgWidth;

    if (appType === "web") {
        if (desktopView) {
            imgHeight = '50vh';
            imgWidth = '50vw';
        } else {
            imgHeight = '50vw';
            imgWidth = '50vh';
        }
    } else {
        if (desktopView) {
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