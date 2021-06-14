import React from 'react';
import logoInstacarro from './assets/logo.png';
import imgUser from './assets/user.svg';
import imgPhone from './assets/phone.svg';
import imgCaret from './assets/caret.svg';

function App() {
    return (
        <header className="header-user">
            <div className="header-limiter">
                <div className="icon-brand">
                    <a href="#">
                        <img src={logoInstacarro} alt="Instacarro"/>
                    </a>
                </div>
                <nav className="icon-phone">
                    <img src={imgPhone} alt="(11)3569-3465" width="30px"/>
                    (11)3569-3465
                </nav>
                <div className="header-user-menu">
                    <img src={imgCaret} alt="caret" className="caret"/>
                    <img src={imgUser} alt="user Test"/>
                    <br />
                    User Test
                </div>
            </div>
        </header>
    );
}

export default App;
