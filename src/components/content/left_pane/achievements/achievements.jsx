import LeftPaneContent from "../left_pane_content";
import "./achievements.css";


const ListContent = ({ name, grade, remark, from, link }) => {
  return (
    <>
      <p className="achievement-name">{name}</p>
      <div className="achievement-details">
        {remark && <p className="remark">Remark : {remark}</p>}
        <p className="grade">Percentage : {grade}%</p>
        <p className="from">
          NPTEL course offered by <span className="college-name">{from}</span>{" "}
        </p>
        <p></p>
        <a  href={link} target={link} className="report-link">Click here to view report card</a>
      </div>
    </>
  );
};

const Achievements = () => {
  const dataAnalyticsWithPython =
    LeftPaneContent.achievements.dataAnalyticsWithPython;
  const joyOfPython = LeftPaneContent.achievements.theJoyOfComputingUsingPython;
  const ethicalHacking = LeftPaneContent.achievements.ethicalHacking;

  return (
    <>
      <p className="common-header">Achievements</p>
      <div className="achievements-div">
        <ul>
          <ListContent
            name={dataAnalyticsWithPython.name}
            grade={dataAnalyticsWithPython.grade}
            from={dataAnalyticsWithPython.from}
            link={dataAnalyticsWithPython.certificateLink}
          />
          <ListContent
            name={joyOfPython.name}
            grade={joyOfPython.grade}
            remark={joyOfPython.remark}
            from={joyOfPython.from}
            link={joyOfPython.certificateLink}
          />
          <ListContent
            name={ethicalHacking.name}
            grade={ethicalHacking.grade}
            remark={ethicalHacking.remark}
            from={ethicalHacking.from}
            link={ethicalHacking.certificateLink}
          />
        </ul>
      </div>
    </>
  );
};

export default Achievements;
