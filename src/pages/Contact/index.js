import React, { useState } from "react";
import Tooltip from '@mui/material/Tooltip';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Fade from '@mui/material/Fade';

import linkedInIcon from '../../assets/icons/linkedin-icon.png';
import githubIcon from '../../assets/icons/github-icon.png';
import emailIcon from '../../assets/icons/email-icon.png';
import cvIcon from '../../assets/icons/cv-icon.png';

const Contact = () => {
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
          WANT TO GET IN TOUCH?<br/>
          <ClickAwayListener onClickAway={handleTooltipClose}>
            <div className="contact__container">
              <a href="https://www.linkedin.com/in/britney-wang-78950a191/" target="_blank" rel="noopener noreferrer">
                <img src={linkedInIcon} alt="linkedin icon"/>
              </a>
              <a href="https://github.com/britneywwc" target="_blank" rel="noopener noreferrer">
                <img src={githubIcon} alt="github icon"/>
              </a>
              <span className="contact__tooltip">
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
                  <a href="#javascript" onClick={copyToClipboard}>
                    <img src={emailIcon} alt="email icon"/>
                  </a>
                </Tooltip>
              </span>
            </div>
          </ClickAwayListener>
          <br/><br/>
          THINKING SOMETHING MORE LONG TERM?<br/>
          DOWNLOAD MY
          <a href="https://drive.google.com/file/d/1MzM2bt_eBovz_bxsRP5_lDk1zbycVlPd/view" target="_blank" rel="noopener noreferrer">
            <img className="contact__icon"src={cvIcon} alt="cv icon"/>
          </a>
      </div>
    </div>
  )
}

export default Contact