import "../../../css/content.css";
import LeftPaneContent from "../left_pane/left_pane_content"

const LeftPane = ({ headerLinkIdx }) => {
  const paneContent = {
    0: LeftPaneContent.aboutMe,
    1: LeftPaneContent.workExperiece,
    2: LeftPaneContent.skills,
    3: LeftPaneContent.education,
    4: LeftPaneContent.projects,
    5: LeftPaneContent.achievements,
  };
//   console.log("content");
//   console.log(paneContent[headerLinkIdx]);

  return (
    <>
      <div className="left-pane">
        
      </div>
    </>
  );
};

export default LeftPane;
