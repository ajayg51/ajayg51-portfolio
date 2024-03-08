import LeftPaneContent from "../left_pane_content";
import "./projects.css";

const TitleContent = ({ title, content }) => {
  return <p>
    <span className="project-desc-title">
      {title} :
    </span>
    {content}
  </p>;

};

const FeaturesOrLibrariesContent = ({
  title, content,
  featureList, libraries
}) => {
  let libraryList = [];
  if (libraries) {
    if (libraries.l0) {
      libraryList.push(libraries.l0);
    }
    if (libraries.l1) {
      libraryList.push(libraries.l1);
    }
    if (libraries.l2) {
      libraryList.push(libraries.l2);
    }
    if (libraries.l3) {
      libraryList.push(libraries.l3);
    }

  }


  return <p>
    <span className="project-desc-title">
      {title} :
    </span>
    {content}
    {featureList && <ul>
      {featureList.map((item) => <li>{item}</li>)}

    </ul>
    }
    {libraries &&

      <ul>
        {libraryList.map(
          (item) => <li><span>{item.title} : </span>{item.desc}</li>
        )}
      </ul>
    }
  </p>;

};


const ProjectContent = ({
  name, githubLink, techStack, about,
  featureList, libraries
}) => {


  return (
    <>
      <p className="project-name">{name}</p>

      <div className="project-details">

        <p>
          <a href={githubLink} target={githubLink} className="project-link">
            Click here to view github repo
          </a>
        </p>

        <TitleContent title="Tech stack" content={techStack} />
        <TitleContent title="About" content={about} />
        <FeaturesOrLibrariesContent title="Features" featureList={featureList} />
        <FeaturesOrLibrariesContent title="Libraries" libraries={libraries} />


      </div>
    </>
  );
};

const Projects = () => {
  const weatherApp = LeftPaneContent.projects.flutter.weatherApp;
  const travelAgency = LeftPaneContent.projects.java.juanaTravelAgency;

  return (
    <>
      <p className="common-header">Projects</p>
      <div className="projects-parent-div">
        <div className="projects-child-div">
          <ul>
            <ProjectContent
              name={weatherApp.name}
              githubLink={weatherApp.githubLink}
              techStack={weatherApp.techStack}
              about={weatherApp.about}
              featureList={weatherApp.featureList}
              libraries={weatherApp.libraries}
            />
            <ProjectContent
              name={travelAgency.name}
              githubLink={travelAgency.githubLink}
              techStack={travelAgency.techStack}
              about={travelAgency.about}
              featureList={travelAgency.featureList}
              libraries={travelAgency.libraries}
            />


          </ul>
        </div>


      </div>

    </>
  );
};

export default Projects;
