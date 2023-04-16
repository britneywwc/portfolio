import React from "react";
import globeIcon from "../../assets/globe.png";
import reactIcon from '../../assets/react-logo.gif'

const LandingPage = (props) => {
    return (
        <div id="page">
            <div className="landing__textbox">
                HI. I AM A SOFTWARE ENGINEER WITH A BACKGROUND IN SOFTWARE + FRONT-END DEVELOPMENT
                &nbsp;             
                <img src={globeIcon} alt="globe icon"/>

                <br/><br/>
                I WORK WITH <img src={reactIcon} alt="react icon"/>
                 REACT, PYTHON + TYPESCRIPT. 
            </div>
        </div>

        
    )
}

export default LandingPage