import LeftPaneContent from "../left_pane_content";
import "./work_experience.css";

const WorkExpContent = ({ role, at, tenure }) => {
  const isBackendBlockExists = role && role.backend;
  const isFlutterBlockExists = role && role.frontend && role.frontend.flutter;
  const isReactJSBlockExists = role && role.frontend && role.frontend.reactJS;

  const backendHeading = role && role.backend && role.backend.heading;
  const flutterHeading = isFlutterBlockExists && role.frontend.flutter.heading;
  const reactJSHeading = isReactJSBlockExists && role.frontend.reactJS.heading;

  const backendTask0 = isBackendBlockExists && role.backend.task0;
  const backendTask1 = isBackendBlockExists && role.backend.task1;

  const flutterTask0 = isFlutterBlockExists && role.frontend.flutter.task0;
  const flutterTask1 = isFlutterBlockExists && role.frontend.flutter.task1;
  const flutterTask2 = isFlutterBlockExists && role.frontend.flutter.task2;

  const reactJSTask0 = isReactJSBlockExists && role.frontend.reactJS.task0;
  const reactJSTask1 = isReactJSBlockExists && role.frontend.reactJS.task1;
  const reactJSTask2 = isReactJSBlockExists && role.frontend.reactJS.task2;

  return (
    <div className="work-experience-heading">
      <p className="company-name">{at}</p>
      <p className="tenure">{tenure}</p>
      <p className="work-experience-description">
        <div className="backend-div">
          <p className="role-heading">{backendHeading}</p>
          <p></p>
          <ul>
            {
              backendTask0 &&
              <li className="role-tasks">{backendTask0}</li>
            }
            {
              backendTask1 &&
              <li className="role-tasks">{backendTask1}</li>
            }

          </ul>
        </div>
        <div className="frontend-div">

          {
            isFlutterBlockExists &&
            <div className="flutter">
              <p className="role-heading">{flutterHeading}</p>
              <p></p>
              
                <ul className="">

                  {
                    flutterTask0 &&
                    <li className="role-tasks">
                      {flutterTask0}
                    </li>
                  }

                  {
                    flutterTask1 &&
                    <li className="role-tasks">
                      {flutterTask1}
                    </li>
                  }

                  {
                    flutterTask2 &&
                    <li className="role-tasks">
                      {flutterTask2}
                    </li>
                  }
                </ul>
              
            </div>
          }

          {
            isReactJSBlockExists &&
            <div className="reactJS">
              <p className="role-heading">{reactJSHeading}</p>
              <p></p>
              
                <ul className="">
                  {
                    reactJSTask0 &&
                    <li className="role-tasks">
                      {reactJSTask0}
                    </li>
                  }
                  {
                    reactJSTask1 &&
                    <li className="role-tasks">
                      {reactJSTask1}
                    </li>
                  }
                  {
                    reactJSTask2 &&
                    <li className="role-tasks">
                      {reactJSTask2}
                    </li>
                  }
                </ul>
              
            </div>
          }


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
            at={sde1.at}
            role={sde1.role}
            tenure={sde1.tenure}
          ></WorkExpContent>
          <WorkExpContent
            at={intern.at}
            role={intern.role}
            tenure={intern.tenure}
          ></WorkExpContent>
        </div>



      </div>

    </>
  );
};

export default WorkExperience;
