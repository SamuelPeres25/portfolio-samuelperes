import Logo from '../../assets/logo.svg';
import GitHub from '../../assets/github.svg';
import Linkedin from '../../assets/linkedin.svg';

import './Header.scss';
import { useState } from 'react';

export function Header(){
    const [menuMobileOpen, setMenuMobileOpen] = useState(false)

    const handleToggleMenuMobile = () => {
        setMenuMobileOpen(!menuMobileOpen)
    }
    return (
        <header>
        <div className="container">
            <div className="info-header">
                {/* <div>
                    <img src={Logo} alt="Logo" />
                </div> */}
                <div className="info-menu">
                    <nav className={`${menuMobileOpen ? "mobile-menu-open" : "menu"}`}>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#aboutme">Sobre</a></li>
                            <li><a href="#tecnologies">Tecnologias</a></li>
                            <li><a href="#projects">Projetos</a></li>
                            <li><a href="#contact">Contato</a></li>
                        </ul>
                    </nav>
                    <div className="icons-menu">
                        <a href="https://github.com/SamuelPeres25" target="_blank"><img src={GitHub} alt="Github Samuel" /></a>
                        <a href="https://www.linkedin.com/in/samuel-peres-94b285324" target="_blank"><img src={Linkedin} alt="Linkedin Samuel" /></a>
                    </div>
                </div>
                <div className="mobile-menu-icon" onClick={handleToggleMenuMobile}>&#9776;</div>
            </div>
        </div>
    </header>
    )
}
