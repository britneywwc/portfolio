import React, { useState, useRef } from "react";
import {Link} from "react-scroll";
import { Button, Box, Stack, Grid } from '@mui/material';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import GridButtonEmpty from "../GridButtonEmpty";


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

    const StyledButton = styled(Button)(({ theme }) => ({
        fontFamily: 'PierSans',
        borderRadius: 28,
        backgroundColor: 'rgba(245,235,224, 0.5)',
        fontSize: 'calc(60% + .3vw)',
        minWidth: 'calc(10% + 1vw)',
        // maxWidth: '7vw',
        // maxWidth: 'calc(100% + 7vw)',
        zIndex: 1,
        cursor: 'pointer',
        ':hover': {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.secondary,
        },
        }));

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
                <Grid container spacing={2}>
                    <Grid item>
                        <StyledButton variant="outlined" disableRipple={true}>
                            <Link activeClass="active" className="home" to="home" spy={true} smooth={true} duration={500}
                            onClick={() => handleOnClick()}>HOME</Link>
                        </StyledButton>
                    </Grid>

                    <Grid item>
                        <StyledButton 
                            variant="outlined"  
                            disableRipple={true}
                            onClick={() => handleOnMouseOver()}
                            onMouseOver={() => handleOnMouseOver()}
                            sx={{
                                backgroundColor: showNav ? 'black' : 'rgba(245,235,224, 0.5)',
                                color: showNav ? 'white' : 'black',
                            }}
                        >
                            PROJECTS
                        </StyledButton>   
                    </Grid>                                                
                        
                    <Grid item>
                        <StyledButton variant="outlined" disableRipple={true}>
                            <Link activeClass="active" className="contact" to="contact" spy={true} smooth={true} duration={500}
                            onClick={() => handleOnClick()}>CONTACT</Link>
                        </StyledButton>
                    </Grid>
            </Grid>
            
            
        </Box>

        </ThemeProvider>

            )
}

export default NavHeader