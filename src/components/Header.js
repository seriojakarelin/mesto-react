import React from 'react';
import mestoLogo from '../images/mesto__logo.svg';

function Header() {
    return(
        <header className="header">
            <img src={mestoLogo} alt="Лого Место" className="header__logo" />
        </header>        
    )
}

export default Header;