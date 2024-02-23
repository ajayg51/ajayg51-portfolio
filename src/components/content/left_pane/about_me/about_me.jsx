import { useEffect, useState } from "react";
import LeftPaneContent from "../left_pane_content";
import "./about_me.css";

const GetMeAsWellText = (index) => {
  switch (index) {
    case 0:
      return (
        <span className="coder">{LeftPaneContent.aboutMe.meAsWell.coder}</span>
      );
    case 1:
      return (
        <span className="developer">
          {LeftPaneContent.aboutMe.meAsWell.developer}
        </span>
      );
    case 2:
      return (
        <span className="singer">
          {LeftPaneContent.aboutMe.meAsWell.singer}
        </span>
      );
  }
};

const MeAsWell = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    let interval = setInterval(() => {
      setIndex((prevIndex) => {
        if (prevIndex == 2) {
          return 0;
        }
        return prevIndex + 1;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, [index]);

  return <p className="me-as-well">I am a {GetMeAsWellText(index)}</p>;
};

const AboutMe = () => {
  return (
    <>
      <p className="common-header">{LeftPaneContent.aboutMe.greet}</p>
      <div>
        <p className="about-me">{LeftPaneContent.aboutMe.me.line1}</p>
      </div>
      <div>
        <p className="about-me">{LeftPaneContent.aboutMe.me.line2}</p>
      </div>
      <MeAsWell></MeAsWell>
    </>
  );
};

export default AboutMe;
