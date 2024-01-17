import "../../css/content.css";


const RightPane = ({assetImg}) => {
  return (
    <>
      <div className="right-pane">
        <div className="pic-container">
          <img
            className="pic"
            src= {assetImg}
            alt= "pic"
          />
        </div>
      </div>
    </>
  );
};

export default RightPane;
