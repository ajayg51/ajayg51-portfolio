import LeftPaneContent from "../left_pane_content";
import "./work_experience.css";

const WorkExpContent = ({ role, at, tenure }) => {
  return (
    <div className="work-experience-heading">
      <p className="company-name">{at}</p>
      <p className="tenure">{tenure}</p>
      <p className="work-experience-description">
        <div className="backend">
          <p className="role-heading">{role && role.backend.heading}</p>
          <p className="role-tasks">{role && role.backend.task0}</p>
          <p className="role-tasks">{role && role.backend.task1}</p>
        </div>
        <div className="frontend">
          <div className="flutter">
            <p className="role-heading">{role && role.frontend.heading}</p>
            <p className="role-tasks">{role && role.frontend.task0}</p>
            <p className="role-tasks">{role && role.frontend.task1}</p>
            <p className="role-tasks">{role && role.frontend.task2}</p>
          </div>
          <div className="reactJS">
            <p className="role-heading">{role && role.frontend.heading}</p>
            <p className="role-tasks">{role && role.frontend.task0}</p>
            <p className="role-tasks">{role && role.frontend.task1}</p>
            <p className="role-tasks">{role && role.frontend.task2}</p>
          </div>
        </div>

      </p>
    </div>
  );
};

const WorkExperience = () => {
  const workExperience = LeftPaneContent.workExperiece.ps;
  const sde1 = workExperience.sde1;
  const intern = workExperience.intern;
  return (
    <>
      <p className="common-header">My work experience</p>
      <div className="work-experience-parent-div">
        <div className="work-experience-child-div">
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
        </div>



      </div>

    </>
  );
};

export default WorkExperience;
