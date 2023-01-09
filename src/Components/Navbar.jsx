import React from 'react';
import Logo from '../img/logo-nav.png';
import MenuIcon from '../img/burger-icon.png';
function Navbar() {
  return (
    <nav className="flex items-center justify-between">
      <img className="w-[110px]" src={Logo} alt="" />
      <img src={MenuIcon} alt="" />
    </nav>
  );
}

export default Navbar;
