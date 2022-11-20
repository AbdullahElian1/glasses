import React from 'react';
import '../style/header.css';

import Logo from '../assets/logo.png';


const Header = ({ isHovering, handleMouseOver, handleMouseOut }) => {

  return (
    <header className="siteHeader">
      <div className="siteMenu" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        <span className={isHovering ? 'siteMenuHover' : ''}>MENU</span>
      </div>
      <div className='siteLogo'>
        <img src={Logo} alt="Logo iamge" />
      </div>
      <div></div>
    </header>
  );
};

export default Header;
