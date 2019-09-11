import React from "react";

const Header = (props) => {
    const {title, date} = props;

    return <div className = "header">
        <h2>{title}</h2>
        <p>{date}</p>
    </div>
};

export default Header;