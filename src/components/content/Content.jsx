import "./content.css";
import LeftPane from "./left_pane/LeftPane";
import RightPane from "./right_pane/RightPane";

const Content = () => {
  return (
    <>
      <div className="content">
        <LeftPane></LeftPane>
        <RightPane></RightPane>
      </div>
    </>
  );
};

export default Content;
