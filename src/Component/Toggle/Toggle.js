import React, { useContext } from 'react';
import Moon from "@iconscout/react-unicons/icons/uil-moon";
import Sun from "@iconscout/react-unicons/icons/uil-sun";
import { themeContext } from "../../Context";
import './Toggle.css';

const Toggle = () => {
    const DarkMode = () => {
        document.querySelector("body").setAttribute("data-theme", "dark")
    }

    const LightMode = () => {
        document.querySelector("body").setAttribute("data-theme", "light")
    }
    DarkMode();
    // const theme = useContext(themeContext);
    // const darkMode = theme.state.darkMode;
    // const handleClick = () => {
    //     // debugger
    //     theme.dispatch({ type: "toggle" });
    // };
    return (
        <div className="toggle" >
            <Moon />
            <Sun />
            {/*                              toggle.css mein left ki property aik assign hy ussy delete
                                          krna hy pehly */}
            <div
                className="t-button"
            // style={darkMode ? { left: "2px" } : { right: "2px" }}
            ></div>
        </div>
    );
};

export default Toggle;