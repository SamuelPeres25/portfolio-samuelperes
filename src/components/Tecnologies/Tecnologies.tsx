import Html from '../../assets/tecnologies/html.svg'
import Css from '../../assets/tecnologies/css.svg'
import Javascript from '../../assets/tecnologies/javascript.svg'
import React from '../../assets/tecnologies/react.svg'
import Next from '../../assets/tecnologies/next.svg'
import Bootstrap from '../../assets/tecnologies/bootstrap.svg'
import MaterialUi from '../../assets/tecnologies/materialui.svg'
import Sass from '../../assets/tecnologies/sass.svg'
import Git from '../../assets/tecnologies/git.svg'
import Sql from '../../assets/tecnologies/sql.svg'
import VsCode from '../../assets/tecnologies/vscode.svg'
import GitHub from '../../assets/tecnologies/github.svg'

import './Tecnologies.scss'

export function Tecnologies() {
  return (
    <section id="tecnologies">
      <div className="container">
        <div className="header-section">
          <h1 className="title">Tecnologias que eu domino</h1>
          <h2 className="subtitle">
            Essas são as tecnologias que eu tenho conhecimento
          </h2>
        </div>
        <div className="container-icons">
          <img src={Html} alt="HTML" />
          <img src={Css} alt="CSS" />
          <img
            src={Javascript}
            alt="Javascript"
          />
          <img src={React} alt="React" />
          <img src={Next} alt="Next JS" />
          <img
            src={Bootstrap}
            alt="Bootstrap"
          />
        </div>
        <div className="container-icons">
          <img
            src={MaterialUi}
            alt="Material UI"
          />
          <img src={Sass} alt="Sass" />
          <img src={Git} alt="Git" />
          <img src={Sql} alt="SQL" />
          <img src={VsCode} alt="VSCode" />
          <img src={GitHub} alt="Github" />
        </div>
      </div>
    </section>
  );
}
