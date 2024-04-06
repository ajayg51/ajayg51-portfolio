import LeftPaneContent from "../left_pane_content";
import Assets from "../../../../assets/Assets";
import "./skills.css";

const ListContent = ({ logo, content }) => {
  return (
    <li className="skill-list-content">
      <p>
        <img src={logo} className="logo"></img>
        {/* <span className="logo-container">
          
        </span> */}
        {content}
      </p>
    </li>
  );
};

const Skills = () => {
  const frameworks = LeftPaneContent.skills.frameworks;
  const languages = LeftPaneContent.skills.languages;
  const tools = LeftPaneContent.skills.tools;
  return (
    <>
      <p className="skills-header">Frameworks</p>

      <ul className="skill-unordered-list">
        <ListContent
          logo={Assets.springBootLogo}
          content={frameworks.springBoot}
        ></ListContent>

        <ListContent
          logo={Assets.reactLogo}
          content={frameworks.reactJS}
        ></ListContent>

        <ListContent
          logo={Assets.flutterLogo}
          content={frameworks.flutter}
        ></ListContent>


        <ListContent
          logo={Assets.junitLogo}
          content={frameworks.junit}
        ></ListContent>
        <ListContent
          logo={Assets.seleniumLogo}
          content={frameworks.selenium}
        ></ListContent>
      </ul>

      <p className="skills-header">Languages</p>
      <ul className="skill-unordered-list">
        <ListContent
          logo={Assets.dartLogo}
          content={languages.dart}
        ></ListContent>
        <ListContent logo={Assets.jsLogo} content={languages.js}></ListContent>
        <ListContent
          logo={Assets.cppLogo}
          content={languages.cpp}
        ></ListContent>
        <ListContent
          logo={Assets.javaLogo}
          content={languages.java}
        ></ListContent>
        <ListContent
          logo={Assets.sqlLogo}
          content={languages.sql}
        ></ListContent>
        <ListContent
          logo={Assets.pythonLogo}
          content={languages.python}
        ></ListContent>
      </ul>
      <p className="skills-header">Tools</p>
      <ul className="skill-unordered-list">
        <ListContent logo={Assets.gitLogo} content={tools.git}></ListContent>
      </ul>
    </>
  );
};

export default Skills;
