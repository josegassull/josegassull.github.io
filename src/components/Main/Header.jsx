import React from "react";

const Header = (props) => {
    return <div className={"text-center"}>

        <div className="p-4 mt-4">
            <h1 className={ props.isDarkMode ? "text-light" : "text-dark"}>
                José Gassull - Software Development
            </h1>
        </div>
    </div>
}

export default Header
