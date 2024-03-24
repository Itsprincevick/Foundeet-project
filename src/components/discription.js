import React from "react";  

import "../styles/description.css";

export const Description = ({text}) => {
    return (
        <p className="description">
            <p className="description-text">{text}</p>
        </p>
    );
}

export default Description;