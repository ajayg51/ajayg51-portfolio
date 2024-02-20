import LeftPaneContent from "../left_pane_content";
import "./projects.css";

const ListContent = ({ name, hostedLink, githubLink, about }) => {
  return (
    <>
      <p className="project-name">{name}</p>
      <div className="project-details">
        {hostedLink && (
          <p>
            <a href={hostedLink} className="project-hosted-link">
              Click here to view hosted web-app
            </a>
          </p>
        )}
        <p>
          <a href={githubLink} className="project-github-link">
            Click here to view github repo
          </a>
        </p>
        <p className="project-desc">{about}</p>
      </div>
    </>
  );
};

const Projects = () => {
  const teamManagement = LeftPaneContent.projects.flutter.teamManagement;
  const weatherApp = LeftPaneContent.projects.flutter.weatherApp;

  return (
    <>
      <p className="common-header">Projects</p>
      <div className="projects-div">
        <ul>
          <ListContent
            name={teamManagement.name}
            hostedLink={teamManagement.hostedLink}
            githubLink={teamManagement.githubLink}
            about={teamManagement.about}
          />
          <ListContent
            name={weatherApp.name}
            githubLink={weatherApp.githubLink}
            about={weatherApp.about}
          />
        </ul>
      </div>
    </>
  );
};

export default Projects;
