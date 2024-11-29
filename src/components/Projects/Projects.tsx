import ImgCardProject from "../../assets/img-project.svg";
import { CardProject } from "./components";

import "./Projects.scss";

export function Projects() {
  const infoProjects = [
    {
      id: "1",
      imgProject: ImgCardProject,
      title: "Controle financeiro",
      description:
        "Esse sistema foi desenvolvido para realizar o controle financeiro das empresas. Nesse sistema é possível gerenciar custos, lucros e fazer relatórios através dos dados captados.",
      stack: " HTML, CSS, React, Node JS",
      linkProject: "http://google.com",
      sourceCode: "http://github.com",
    },
    {
        id: "2",
        imgProject: ImgCardProject,
        title: "Controle financeiro",
        description:
          "Esse sistema foi desenvolvido para realizar o controle financeiro das empresas. Nesse sistema é possível gerenciar custos, lucros e fazer relatórios através dos dados captados.",
        stack: " HTML, CSS, React, Node JS",
        linkProject: "http://google.com",
        sourceCode: "http://github.com",
      },
  ];
  return (
    <section id="projects">
      <div className="container">
        <div className="header-section">
          <h1 className="title">Projetos</h1>
          <h2 className="subtitle">Esses são os projetos que eu desenvolvi</h2>
        </div>
        <div className="info-projects">
          {infoProjects.map((cardInfo) => {
            return (
              <CardProject
                key={cardInfo.id}
                imgProject={cardInfo.imgProject}
                title={cardInfo.title}
                description={cardInfo.description}
                stack={cardInfo.stack}
                linkProject={cardInfo.linkProject}
                sourceCode={cardInfo.sourceCode}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
