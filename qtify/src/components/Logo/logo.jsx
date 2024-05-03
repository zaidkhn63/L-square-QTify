import React from "react";
import logo from "../../Assets/logo.png";
import "./Logo.css"; // Import the CSS file for styling

const Logo = () => {
  return (
    <div className="logo-container">
      <img src={logo} width={67} alt="Logo" className="logo-img" />
    </div>
  );
};

export default Logo;
