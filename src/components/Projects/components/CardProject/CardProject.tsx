import LinkIcon from "../../../../assets/link-icon.svg";
import GitHubIcon from "../../../../assets/github-icon.svg";

interface CardProjectProps {
  imgProject: string;
  title: string;
  description: string;
  stack: string;
  linkProject: string;
  sourceCode: string;
}
export function CardProject({
  imgProject,
  title,
  description,
  stack,
  linkProject,
  sourceCode,
}: CardProjectProps) {
  return (
    <div className="card-project">
      <img src={imgProject} alt="Projeto x Code Start" />
      <div className="info-card-project">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="legend-project">
          <p>
            <span>Stack:</span>
            {stack}
          </p>
        </div>
        <div className="footer-project">
          <div className="url-project">
            <img src={LinkIcon} alt="Link projeto X Code Start" />
            <a href={linkProject}>Site do projeto</a>
          </div>
          <div className="code-project">
            <img
              src={GitHubIcon}
              alt="Link do código do projeto X Code Start"
            />
            <a href={sourceCode}>Código Fonte</a>
          </div>
        </div>
      </div>
    </div>
  );
}
