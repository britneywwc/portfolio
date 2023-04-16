import React, {useState} from "react";

const NavButton = ({children}) => {
    var [isClicked, setClicked] = useState(false);
    return (
        <button className="nav__button" onClick={() => isClicked ? setClicked(false) : setClicked(true)}>
            {/* {setClicked ? {children} : null} */}
            {children}
        </button>
    )
}

export default NavButton