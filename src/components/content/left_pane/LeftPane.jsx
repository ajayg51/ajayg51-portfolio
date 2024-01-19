import "./left_pane.css";
import AboutMe from "./about_me/AboutMe.jsx";
import WorkExperience from "./work_experience/WorkExperience.jsx";
import Skills from "./skills/Skills";
import { useEffect } from "react";
import { useState } from "react";

const GetContent = (index) => {
  switch (index) {
    case 0:
      return <AboutMe></AboutMe>;
    case 1:
      return <WorkExperience></WorkExperience>;
    case 2:
      return <Skills></Skills>;
    default:
      return <p>Nothing here!</p>;
  }
};
const LeftPane = ({ contentIdx }) => {
  const [idx, setIdx] = useState(0);

  let content = <p>Nothing here</p>;

  useEffect(() => {
    setIdx(contentIdx);
  }, [contentIdx]);

  console.log("idx");
  console.log(idx);
  content = GetContent(idx);

  return (
    <>
      <div className="left-pane">
        {content}
      </div>
    </>
  );
};

export default LeftPane;
