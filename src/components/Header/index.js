import React from "react";
import "./style.css";

function Header(props) {
    return (
        <header>
            <h1>{props.page}</h1>
        </header>
    );
}

export default Header;