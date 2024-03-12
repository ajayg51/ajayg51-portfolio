import { useEffect, useState } from "react";
import LeftPaneContent from "../left_pane_content";
import "./about_me.css";

const getText = index => {
  switch (index) {
    case 0:
      return LeftPaneContent.aboutMe.meAsWell.coder;


    case 1:
      return LeftPaneContent.aboutMe.meAsWell.developer;


    case 2:
      return LeftPaneContent.aboutMe.meAsWell.singer;

  }
}

const getTextColor = index => {
  switch (index) {
    case 0:
      return "purple";


    case 1:
      return "green";


    case 2:
      return "lime";

  }
}


const MeAsWell = () => {

  const [text, setText] = useState("");
  const [textColor, setTextColor] = useState("black");
  const [outText, setOutText] = useState("");

  const [textIdx, setTextIdx] = useState(-1);


  useEffect(() => {

    let interval = setInterval(

      () => {
        setOutText(
          (prevText) => {
            let prevTextLen = 0, textLen = 0;

            if (prevText !== undefined) {

              prevTextLen = prevText.length;
            }

            if (text != undefined) {
              textLen = text.length;
            }

            if (textIdx === -1) {

              setText(() => {

                prevText = getText(textIdx);
                return prevText;

              });

              setTextColor(() => {

                return getTextColor(textIdx);

              });

              setTextIdx(prevIdx => {
                prevIdx++;
                return prevIdx % 3;
              });

            } else if (prevTextLen > textLen - 1) {


              setText(() => {
                return getText(textIdx);
              });

              setTextColor(() => {
                return getTextColor(textIdx);
              });

              setTextIdx(prevIdx => {
                prevIdx++;
                return prevIdx % 3;
              });

              return "";

            }

            if (text[prevTextLen] !== undefined) {
              return prevText += text[prevTextLen];
            }
            return prevText;

          }
        );
      }, 180);

    return () => clearInterval(interval);

  }, [outText]);


  return <p className="me-as-well">I am a
    <span className="me-span-text" style={{ color: textColor }}>
      {outText}
    </span>
    <span>
      &#x1F60D;
    </span>
  </p>;


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
