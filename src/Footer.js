import React from "react";

const Footer = (props) => {
    const {service, media} = props;

    return <footer>
        <p>{service}</p>
        <p>{media}</p>
    </footer>
};

export default Footer;