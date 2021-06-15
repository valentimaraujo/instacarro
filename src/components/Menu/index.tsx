import React from 'react';

import './style.css';
import logoInstaCarro from '../../assets/logo.png';
import imgPhone from '../../assets/phone.svg';
import imgCaret from '../../assets/caret.svg';
import imgUser from '../../assets/user.svg';

const Menu = () => {
  return (
    <header className="header-user">
      <div className="header-limiter">
        <div className="icon-brand">
          <a href="/">
            <img src={ logoInstaCarro } alt="InstaCarro"/>
          </a>
        </div>
        <nav className="icon-phone">
          <img src={ imgPhone } alt="(11)3569-3465" width="30px"/>
          (11)3569-3465
        </nav>
        <div className="header-user-menu">
          <img src={ imgCaret } alt="caret" className="caret"/>
          <img src={ imgUser } alt="user Test"/>
          <br/>
          User Test
        </div>
      </div>
    </header>
  );
};

export default Menu;