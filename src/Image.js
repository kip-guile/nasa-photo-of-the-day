import React from "react";

const Image = (props) => {
const {source, copyright} = props;

    return <div>
        <div>
            <img src = {source} alt = "bray-falls"/>
        </div>
        <h6>{copyright}</h6>
    </div>
};

export default Image;