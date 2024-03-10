import { useEffect, useState } from "react";
import LeftPaneContent from "../left_pane_content";
import "./about_me.css";

const GetMeAsWellText = (index) => {
  let text;

  switch (index) {
    case 0:
      text = LeftPaneContent.aboutMe.meAsWell.coder;
      break;

    case 1:
      text = LeftPaneContent.aboutMe.meAsWell.developer;
      break;

    case 2:
      text = LeftPaneContent.aboutMe.meAsWell.singer;
      break;
  }

  const [textIdx, setTextIdx] = useState(0);
  const [outText, setOutText] = useState("");


  useEffect(() => {
    let interval = setInterval(

      () => {
        setOutText(
          (prevText) => {
            const prevTextLen = prevText.length;
            
            console.log(prevText+" : "+text +" : "+text[prevTextLen]);
            
            if (prevTextLen > text.length-1) {
              console.log(text + " " + text.length);
              return "";
            }

            return prevText += text[prevTextLen];
          }
        );
      }, 100);

    return () => clearInterval(interval);

  }, [outText]);

  // console.log(outText);

  return <span className="coder">{outText}</span>;
  // (<>

  //   <span className="developer">

  //   </span>
  //   <span className="singer">

  //   </span>
  // </>);
};

const MeAsWell = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let interval = setInterval(

      () => {
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
