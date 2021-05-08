import React from 'react';
import './Header.css'
import image from '../Photo/image.png'
const Header = () => {
    return (
        <div className="header-img">
            <img src={image} alt="" />
            <h1 className="main-tex fs-1">Team Tracker</h1>

        </div>

    );
};

export default Header;