import LeftPaneContent from "./left_pane_content";
import "../../../css/left_pane.css"
const Skills = () => {
  return (
    <>
      <p>Frameworks</p>
      <ul >
        <li>
          <p>{LeftPaneContent.skills.frameworks.flutter}</p>
        </li>
        <li>
          <p>{LeftPaneContent.skills.frameworks.reactJS}</p>
        </li>
      </ul>
      <p>Languages</p>
      <ul>
        <li>
          <p>{LeftPaneContent.skills.languages.dart}</p>
        </li>

        <li>
          <p>{LeftPaneContent.skills.languages.js}</p>
        </li>
        <li>
          <p>{LeftPaneContent.skills.languages.cpp}</p>
        </li>

        <li>
          <p>{LeftPaneContent.skills.languages.java}</p>
        </li>

        <li>
          <p>{LeftPaneContent.skills.languages.sql}</p>
        </li>

        <li>
          <p>{LeftPaneContent.skills.languages.python}</p>
        </li>
      </ul>
      <p>Tools</p>
      <ul>
        <li>
          <p>{LeftPaneContent.skills.tools.git}</p>
        </li>
      </ul>
    </>
  );
};

export default Skills;
