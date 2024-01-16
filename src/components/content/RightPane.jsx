import "../../css/content.css";
import "../../assets/Assets";
import Assets from "../../assets/Assets";
import { useState } from "react";

const RightPane = ({ figCaption }) => {
  let imgAltContent = "avatar";
  const [imgLoadErrorText, setImgLoadErrText] = useState("");
  const onImgLoadError = () => {
    setImgLoadErrText("Failed to load image");
  };
  return (
    <>
      <div className="right-pane">
        <div className="avatar">
          <img
            src={Assets.img}
            alt={imgAltContent}
            onError={onImgLoadError}
          ></img>
        </div>
        <div className="caption">
            <p>{figCaption}</p>
        </div>
      </div>
    </>
  );
};

export default RightPane;
