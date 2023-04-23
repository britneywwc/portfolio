import React, { useState, useEffect } from "react";
import Tooltip from '@mui/material/Tooltip';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Fade from '@mui/material/Fade';

import linkedInIcon from '../../assets/linkedin-icon.png';
import githubIcon from '../../assets/github-icon.png';
import emailIcon from '../../assets/email-icon.png';
import cvIcon from '../../assets/cv-icon.png';
import resumePDF from '../../assets/britney-resume.pdf';

const Contact = (props) => {
    const email = "britneywwc@gmail.com";

    const [open, setOpen] = useState(false);

    const handleTooltipClose = () => {
        setOpen(false);
    };
    
    const copyToClipboard = () => {
        setOpen(true);
        navigator.clipboard.writeText(email);

        setTimeout(() => {
            setOpen(false);
        }, 3000);
    }

    return (
        <div id="page">

            <div className="contact__textbox">
                WANT TO GET IN TOUCH? <br/>
                    
                    <ClickAwayListener onClickAway={handleTooltipClose}>
                        <div className="contact__container">
                            <a href="https://www.linkedin.com/in/britney-wang-78950a191/" target="_blank" rel="noopener noreferrer">
                            <img src={linkedInIcon} alt="linkedin icon"/></a>
                            <a href="https://github.com/britneywwc" target="_blank" rel="noopener noreferrer">
                            <img src={githubIcon} alt="github icon"/></a>
                            <Tooltip
                                PopperProps={{
                                disablePortal: true,
                                }}
                                TransitionComponent={Fade}
                                TransitionProps={{ timeout: 600 }}
                                onClose={handleTooltipClose}
                                open={open}
                                disableFocusListener
                                disableHoverListener
                                disableTouchListener
                                title="Copied to clipboard"
                            >
                                <a href="javascript: void(0)" onClick={copyToClipboard}>
                                <img src={emailIcon} title="email icon"/>
                                </a>
                            </Tooltip>

                        </div>
                    </ClickAwayListener>   

                <br/><br/>

                THINKING SOMETHING MORE LONG TERM? <br/>
                DOWNLOAD MY                            
                
                <a href={resumePDF} download="britney-resume.pdf">

                <img src={cvIcon} alt="cv icon"/></a>



            </div>
        </div>
    )
}

export default Contact