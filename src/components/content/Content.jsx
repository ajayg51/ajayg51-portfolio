import "./content.css";
import LeftPane from "./left_pane/LeftPane";
import RightPane from "./right_pane/RightPane";

const Content = ({ contentIdx }) => {
  return (
    <>
      <div className="content">
        <LeftPane contentIdx={contentIdx}></LeftPane>
        <RightPane contentIdx={contentIdx}></RightPane>
      </div>
    </>
  );
};

export default Content;
