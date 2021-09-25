import React from 'react';
import "./Header.css";
import logo from "../images/header-background.jpeg";

const Header = () => {
    return (
        <div className="header-container">
            <img
                style={{ width: "300px", height: "200px", textAlign: "center" }}
                src={logo} alt="" />
            <h1 style={{ color: "goldenrod" }}>Welcome to Al's Hotel and Cafe</h1>
        </div>
    );
};

export default Header;