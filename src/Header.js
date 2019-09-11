import React from "react";

const Header = (props) => {
    const {title, date} = props;

    return <div>
        <h2>{title}</h2>
        <h6>{date}</h6>
    </div>
};

export default Header;