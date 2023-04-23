import React from "react";
import {Link} from "react-scroll";

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';




const NavHeader = () => {
    const theme = createTheme({
        palette: {
            primary: {
                main: "#000",
                secondary: "#fff",
            }
        },
        });

    const StyledButton = styled(Button)(({ theme }) => ({
        borderRadius: 28,
        backgroundColor: theme.palette.primary.secondary,
        ':hover': {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.secondary,
        },
        }));

    return (
        <ThemeProvider theme={theme}>
            <Stack direction="row" spacing={4} justifyContent="flex-end">
                <Box sx={{ '& > :not(style)': { m: 1 }, marginTop: '1%', marginRight: '1%', position: 'fixed' }}>
                    <StyledButton
                        variant="outlined" 
                        disableRipple
                        >
                        <Link activeClass="active" className="home" to="home" spy={true} smooth={true} duration={500}>HOME</Link>
                    </StyledButton>

                    <StyledButton 
                        variant="outlined"  
                        disableRipple
                        >
                        <Link activeClass="active" className="project" to="projects" spy={true} smooth={true} duration={500}>PROJECTS</Link>
                    </StyledButton>

                    <StyledButton 
                        variant="outlined" 
                        disableRipple="true">
                        <Link activeClass="active" className="contact" to="contact" spy={true} smooth={true} duration={500}>CONTACT</Link>
                    </StyledButton>
                </Box>
            </Stack>
        </ThemeProvider>

            )
}

export default NavHeader