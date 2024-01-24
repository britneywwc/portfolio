import React from "react";
import reactIcon from '../../assets/icons/react-logo.gif';


const LandingPage = (props) => {
    return (
        <div id="page">
            <div className="landing__textbox">
                HI, I AM BRITNEY. A&nbsp;

                <span className="landing__underline">
                    SOFTWARE ENGINEER
                </span>

                &nbsp;
                WITH BACKGROUND IN &nbsp;

                 <span className="landing__highlight">
                    FRONT-END
                 </span>

                 &nbsp;+ SOFTWARE DEVELOPMENT. &nbsp;             

                <br/><br/>
                I WORK WITH <img src={reactIcon} alt="react icon"/> REACTJS, NODEJS, PYTHON + TYPESCRIPT. 
                <br/>
                CURRENTLY A SOFTWARE ENGINEER @ CANONICAL.
            </div>
        </div>

        
    )
}

export default LandingPage