import Profile from '../../assets/foto-perfil-o.png'
import './Presentation.scss'

export function Presentation(){
    return (
        <section id="apresentation">
        <div className="container">
            <div className="info-apresentation">
                <h1>
                    Olá!<br />
                    Meu nome é Samuel<br />
                    e eu sou<br />
                    <span>Desenvolvedor Web</span>
                </h1>
                <div className="profile-photo">
                    <img src={Profile} alt="Foto Samuel" />
                </div>
            </div>
        </div>
    </section>
    )
}