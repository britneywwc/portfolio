import React from "react";
import globeIcon from "../../assets/globe.png";
import reactIcon from '../../assets/react-logo.gif'
import Container from '@mui/material/Container';


const LandingPage = (props) => {
    return (
        <div id="page">
        <Container>
            <div className="landing__textbox">
                HI. I AM A &nbsp;

                <span className="landing__underline">
                    SOFTWARE ENGINEER
                </span>

                &nbsp;
                 WITH A BACKGROUND IN &nbsp;

                 <span className="landing__highlight">
                    FRONT-END
                 </span>

                 &nbsp;+ SOFTWARE DEVELOPMENT. &nbsp;             

                <span>
                    <img src={globeIcon} alt="globe icon"/>
                </span>

                <br/><br/>
                I WORK WITH <img src={reactIcon} alt="react icon"/> REACT, PYTHON + TYPESCRIPT. 
            </div>
            </Container>
        </div>

        
    )
}

export default LandingPage