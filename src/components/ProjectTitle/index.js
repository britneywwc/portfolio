import React from "react";
import Grid from '@mui/material/Grid';


const ProjectTitle = (props) => {
    const currProj = props.currProj;
    return (
        <Grid item xs={4}>
                <div>
                    <div className="project__card__title__text">
                        <span className="project__card__title__number">
                            {String(currProj.id).padStart(2, '0')}.
                        </span>
                        {currProj.title}
                    </div>
                </div>
        </Grid>
    )
}

export default ProjectTitle;