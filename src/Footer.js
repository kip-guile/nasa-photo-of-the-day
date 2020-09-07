import React from "react";

const Footer = (props) => {
    const {service, media} = props;

    return <footer>
        <p>service version: {service}</p>
        <p>media type: {media}</p>
    </footer>
};

export default Footer;