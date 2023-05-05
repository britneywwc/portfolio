import React, { useState, useRef } from "react";
import {Link} from "react-scroll";
import { Button, Box, Stack, Grid } from '@mui/material';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';


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
                    position: 'fixed' 
                }}
                right="0"
            >
                <Grid container spacing={1}>
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
            
            {showNav ?
            
                <Grid container rowSpacing={0.5}>
                    <Grid item xs={4}></Grid>
                        <Grid item xs={4}>
                            <StyledButton variant="outlined" disableRipple={true}>
                                <Link activeClass="active" className="project" to="project-curify" spy={true} smooth={true} duration={500}
                                onClick={() => handleOnClick()}>CURIFY</Link>
                            </StyledButton> 
                        </Grid>
                    <Grid item xs={4}></Grid>

                    

                    <Grid item xs={4}></Grid>
                        <Grid item xs={4}>
                            <StyledButton variant="outlined" disableRipple={true}>
                                <Link activeClass="active" className="project" to="project-gpt" spy={true} smooth={true} duration={500}
                                onClick={() => handleOnClick()}>MICHAEL SCOTT GPT</Link>
                            </StyledButton> 
                        </Grid>
                    <Grid item xs={4}></Grid>


                    {/* <Grid item xs={4}></Grid>
                        <Grid item xs={4}>
                            <StyledButton variant="outlined" disableRipple={true}>
                                <Link activeClass="active" className="project" to="project-intrepidus" spy={true} smooth={true} duration={500}
                                onClick={() => handleOnClick()}>INTREPIDUS</Link>
                            </StyledButton> 
                        </Grid>
                    <Grid item xs={4}></Grid> */}

                </Grid>
                : null}
        </Box>


        </ThemeProvider>

            )
}

export default NavHeader