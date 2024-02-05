import LeftPaneContent from "../left_pane_content";
import "./work_experience.css";

const WorkExpContent = ({ role, at, tenure }) => {
  return (
    <p className="work-experience-heading">
      {role}
      <p className="work-experience-sub-heading">
        <p>At {at}</p>
        <p>{tenure}</p>
      </p>
    </p>
  );
};

const WorkExperience = () => {
  const workExperience = LeftPaneContent.workExperiece.ps;
  const sde1 = workExperience.sde1;
  const intern = workExperience.intern;
  return (
    <>
      <WorkExpContent
        role={sde1.role}
        at={sde1.at}
        tenure={sde1.tenure}
      ></WorkExpContent>
      <WorkExpContent
        role={intern.role}
        at={intern.at}
        tenure={intern.tenure}
      ></WorkExpContent>
    </>
  );
};

export default WorkExperience;
