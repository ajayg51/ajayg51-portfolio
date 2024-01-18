import "../../css/content.css";
import Assets from "../../assets/Assets";
import LeftPane from "./left_pane/LeftPane";
import RightPane from "./RightPane";

const Content = ({ headerLinkIdx }) => {
    // console.log('idx');
    // console.log(headerLinkIdx);
  return (
    <>
      <div className="content">
        <LeftPane headerLinkIdx={headerLinkIdx}></LeftPane>
        <RightPane assetImg={Assets.avatar}></RightPane>
      </div>
    </>
  );
};

export default Content;
