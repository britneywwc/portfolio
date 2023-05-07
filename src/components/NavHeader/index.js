import React from "react";
import {Link} from "react-scroll";
import { Box, Grid, createTheme, ThemeProvider} from '@mui/material';
import NavProjects from "../NavProjects";
import StyledNavButton from "../StyledNavButton";

const NavHeader = (props) => {
    const showNav = props.showNav;
    const setShowNav = props.setShowNav;


    const theme = createTheme({
        palette: {
            primary: {
                main: "#000",
                secondary: "#f5ebe0",
            }
        },
        });

    

    const handleOnMouseOver = () => {        
        setShowNav(true);
    }

    const handleOnClick = () => {
        setShowNav(false);
    }    

    return (
        <ThemeProvider theme={theme}>
            <Box 
                sx={{ 
                    '& > :not(style)': { m: 1 }, 
                    marginTop: '1%', 
                    marginRight: '1%', 
                    position: 'fixed',
                    maxWidth: 'calc(100% + 20vw)',
                }}
                right="0"
            >
                <Grid container spacing={2} sx={{ maxWidth: "100% !important" }}>
                    <Grid item sx={{maxWidth: "100%"}}>
                    <StyledNavButton variant="outlined" disableRipple={true}>
                        <Link activeClass="active" className="home" to="home" spy={true} smooth={true} duration={500}
                         onClick={handleOnClick}>HOME</Link>
                    </StyledNavButton>
                </Grid>

                <Grid item sx={{maxWidth: "100%"}}>
                    <StyledNavButton 
                        variant="outlined"  
                        disableRipple={true}
                        onClick={handleOnMouseOver}
                        onMouseOver={handleOnMouseOver}
                        sx={{
                            backgroundColor: showNav ? 'black' : 'rgba(245,235,224, 0.5)',
                            color: showNav ? 'white' : 'black',
                        }}
                     >
                        PROJECTS
                     </StyledNavButton>  
                                      
                </Grid>                                                
                    
                <Grid item sx={{maxWidth: "100%"}}>
                    <StyledNavButton variant="outlined" disableRipple={true}>
                        <Link activeClass="active" className="contact" to="contact" spy={true} smooth={true} duration={500}
                        onClick={handleOnClick}>CONTACT</Link>
                    </StyledNavButton>
                </Grid>
                
            </Grid>

            {showNav ? <NavProjects handleOnClick={handleOnClick}/> : null }
            
            
        </Box>

        </ThemeProvider>

    )
}

export default NavHeader;