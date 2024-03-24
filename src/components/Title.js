import React from "react";

import "../styles/title.css";

export const Title = ({alt, src}) => {
    return (
        <div className="title">
          <img className="foundeet-logo" src={src} alt={alt}/>
        </div>
    );
}

export default Title;