import LeftPaneContent from "../left_pane/left_pane_content";

const AboutMe = () => {
  return (
    <>
      <p>{LeftPaneContent.aboutMe.greet}</p>
      <p>{LeftPaneContent.aboutMe.me}</p>
      <p>I am a {LeftPaneContent.aboutMe.meAsWell.coder}</p>
    </>
  );
};

export default AboutMe;
