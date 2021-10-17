import React from "react";

const ModeButton = (props) => {
    function changeMode() {
        props.changeMode(!props.isDarkMode);
    }

    return <div className={"text-center"}>
        <button className={props.isDarkMode ? "btn btn-light mt-2" : "btn btn-dark mt-2"}
                onClick={() => changeMode()}>{props.isDarkMode ? "Light" : "Dark"}</button>
    </div>

}
export default ModeButton;  