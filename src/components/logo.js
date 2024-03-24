import React from "react";

import "../styles/logo.css";

export const Logo = ({ alt, src }) => {
   return (
    <div className="logo-container">
        <img className="logo" src={src} alt={alt} />
    </div>
   );
};  

export default Logo;