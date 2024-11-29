import Github from '../../assets/github.svg';
import Linkedin from '../../assets/linkedin.svg';

import './Footer.scss'

export function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="first-infos-footer">
                    {/* <div className="logo">
                    <img src={Logo} alt="Logo"/>
                </div> */}
                    <div className="container-right-footer">
                        <p className="cellphone-footer">+55 33 99960 - 9891</p>
                        <p className="email-footer">samuelperes257@gmail.com</p>
                        <div className="icons-menu">
                            <a href="https://github.com/SamuelPeres25" target="_blank"><img src={Github} alt="GitHub Samuel" /></a>
                            <a href="https://www.linkedin.com/in/samuel-peres-94b285324" target="_blank"><img src={Linkedin} alt="Linkedin Samuel" /></a>
                        </div>
                    </div>
                </div>
                <div className="second-infos-footer">
                    <nav className="menu-footer">
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#aboutme">Sobre</a></li>
                            <li><a href="#tecnologies">Tecnologias</a></li>
                            <li><a href="#projects">Projetos</a></li>
                            <li><a href="#contact">Contato</a></li>
                        </ul>
                    </nav>
                    {/* <p className="copyright">Todos os direitos reservados @ Samuel Peres 2024</p> */}
                </div>
            </div>
        </footer>
    )
}