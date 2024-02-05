import "./right_pane.css";
import Assets from "../../../assets/Assets";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { HeaderLinkContext } from "../../../utils/context.jsx";

const GetImg = (index) => {
  switch (index) {
    case 0:
      return <img className="pic" src={Assets.avatar} alt="pic" />;
    case 1:
      return <img className="pic" src={Assets.psLogo} alt="pic" />;
    case 2:
      return <img className="pic" src={Assets.coderLogo} alt="pic" />;
    case 3:
      return <img className="pic" src={Assets.nitpLogo} alt="pic" />;
    case 4:
      return <img className="pic" src={Assets.coderLogo} alt="pic" />;
    case 5:
      return <img className="pic" src={Assets.achievementLogo} alt="pic" />;
    default:
      return <img className="pic" src={Assets.noImg} alt="pic" />;
  }
};

const RightPane = () => {
  const contextIdxObj = useContext(HeaderLinkContext);

  const [index, setIndex] = useState(contextIdxObj.idx);

  useEffect(() => {
    setIndex(contextIdxObj.idx);
  }, [contextIdxObj.idx]);

  return (
    <>
      <div className="right-pane">
        <div className="pic-container">{GetImg(index)}</div>
      </div>
    </>
  );
};

export default RightPane;
