import React from "react";
import { Grid } from "@mui/material";
import {Link} from "react-scroll";
import StyledNavButton from "../StyledNavButton";


const NavProjects = (props) => {
    return (

            <Grid container rowSpacing={0.5} sx={{maxWidth: "100% !important"}}>
            <Grid item xs={12} sx={{maxWidth: "100%"}}>
                <StyledNavButton variant="outlined" disableRipple={true}>
                    <Link activeClass="active" className="project" to="project-curify" spy={true} smooth={true} duration={500}
                    onClick={() => props.handleOnClick}>CURIFY</Link>
                </StyledNavButton>                            
            </Grid>
            <Grid item xs={12} sx={{maxWidth: "100%"}}>
                <StyledNavButton variant="outlined" disableRipple={true}>
                    <Link activeClass="active" className="project" to="project-gpt" spy={true} smooth={true} duration={500}
                    onClick={() => props.handleOnClick}>michael</Link>
                </StyledNavButton> 
            </Grid>

        <Grid item xs={12} sx={{maxWidth: "100%"}}>
            <StyledNavButton variant="outlined" disableRipple={true}>
                <Link activeClass="active" className="project" to="project-intrepidus" spy={true} smooth={true} duration={500}
                onClick={() => props.handleOnClick}>INTREPIDUS</Link>
            </StyledNavButton> 
        </Grid>
        
        {/* TO ADD */}

        <Grid item xs={12} sx={{maxWidth: "100%"}}>
            <StyledNavButton variant="outlined" disableRipple={true}>
                <Link activeClass="active" className="project" to="project-intrepidus" spy={true} smooth={true} duration={500}
                onClick={() => props.handleOnClick}>READY2EAT</Link>
            </StyledNavButton> 
        </Grid>


        <Grid item xs={12} sx={{maxWidth: "100%"}}>
            <StyledNavButton variant="outlined" disableRipple={true}>
                <Link activeClass="active" className="project" to="project-intrepidus" spy={true} smooth={true} duration={500}
                onClick={() => handleOnClick()}>EXPENSE TRACKER</Link>
            </StyledNavButton> 
        </Grid>
    </Grid>
    )
}

export default NavProjects;