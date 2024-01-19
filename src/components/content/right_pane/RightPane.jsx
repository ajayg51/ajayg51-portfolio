import "./right_pane.css";
import Assets from "../../../assets/Assets";
import { useEffect, useState } from "react";

const GetImg = (index) => {
  switch (index) {
    case 0:
      return <img className="pic" src={Assets.avatar} alt="pic" />;
    case 1:
      return <img className="pic" src={Assets.psLogo} alt="pic" />;
    case 2:
      return <img className="pic" src={Assets.coderLogo} alt="pic" />;
    default:
      return <img className="pic" src={Assets.noImg} alt="pic" />;
  }
};

const RightPane = ({ contentIdx }) => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    setIndex(contentIdx);
  }, [contentIdx]);
  return (
    <>
      <div className="right-pane">
        <div className="pic-container">{GetImg(index)}</div>
      </div>
    </>
  );
};

export default RightPane;
