import React from "react";
import { Grid, Box } from "@mui/material";
import { Link } from "react-scroll";
import StyledNavButton from "../StyledNavButton";


const NavProjects = (props) => {
    return (
        <Box sx={{ 
            marginTop: '0.5vh', 
            maxWidth: '5vw',
            marginLeft: '1%',
        }}
        right="0">
            <Grid container rowSpacing={0.5} sx={{maxWidth: "100% !important"}}>
                <Grid item xs={12} sx={{maxWidth: "100%"}}>
                    <StyledNavButton variant="outlined" disableRipple={true}>
                        <Link activeClass="active" className="project" to="project-curify" spy={true} smooth={true} duration={500}
                        onClick={props.handleOnClick}>CURIFY</Link>
                    </StyledNavButton>                            
                </Grid>
                <Grid item xs={12} sx={{maxWidth: "100%"}}>
                    <StyledNavButton variant="outlined" disableRipple={true}>
                        <Link activeClass="active" className="project" to="project-gpt" spy={true} smooth={true} duration={500}
                        onClick={props.handleOnClick}>MICHAEL SCOTT GPT</Link>
                    </StyledNavButton> 
                </Grid>

            <Grid item xs={12} sx={{maxWidth: "100%"}}>
                <StyledNavButton variant="outlined" disableRipple={true}>
                    <Link activeClass="active" className="project" to="project-intrepidus" spy={true} smooth={true} duration={500}
                    onClick={props.handleOnClick}>INTREPIDUS</Link>
                </StyledNavButton> 
            </Grid>
                
            <Grid item xs={12} sx={{maxWidth: "100%"}}>
                <StyledNavButton variant="outlined" disableRipple={true}>
                    <Link activeClass="active" className="project" to="project-expense" spy={true} smooth={true} duration={500}
                    onClick={props.handleOnClick}>EXPENSE TRACKER</Link>
                </StyledNavButton> 
            </Grid>

        </Grid>
    </Box>
    )
}

export default NavProjects;