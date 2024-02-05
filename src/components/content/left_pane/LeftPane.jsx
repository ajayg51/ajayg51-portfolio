import "./left_pane.css";
import AboutMe from "./about_me/AboutMe.jsx";
import WorkExperience from "./work_experience/work_experience.jsx";
import Skills from "./skills/skills.jsx";
import Education from "./education/education.jsx";
import Projects from "./projects/projects.jsx";
import { useEffect } from "react";
import { useContext } from "react";
import { HeaderLinkContext } from "../../../utils/context.jsx";
import Achievements from "./achievements/achievements.jsx";

const GetContent = (index) => {
  switch (index) {
    case 0:
      return <AboutMe></AboutMe>;
    case 1:
      return <WorkExperience></WorkExperience>;
    case 2:
      return <Skills></Skills>;
    case 3:
      return <Education></Education>;
    case 4:
      return <Projects></Projects>;
    case 5:
      return <Achievements></Achievements>;
    default:
      return <p>Nothing here!</p>;
  }
};
const LeftPane = () => {
  const { idx, setIdx } = useContext(HeaderLinkContext);

  let content = <p>Nothing here</p>;

  useEffect(() => {
    setIdx(idx);
  }, [idx]);

  console.log("idx");
  console.log(idx);

  content = GetContent(idx);

  return (
    <>
      <div className="left-pane">{content}</div>
    </>
  );
};

export default LeftPane;
