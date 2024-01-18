import "../../css/content.css";
import Assets from "../../assets/Assets";
import LeftPane from "./left_pane/LeftPane";
import RightPane from "./RightPane";


const Content = ({ contentIdx }) => {
    
  return (
    <>
      <div className="content">
        <LeftPane contentIdx={contentIdx}></LeftPane>
        <RightPane assetImg={Assets.avatar}></RightPane>
      </div>
    </>
  );
};

export default Content;
