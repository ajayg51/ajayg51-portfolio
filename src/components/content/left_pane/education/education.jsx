import { useState } from "react";
import LeftPaneContent from "../left_pane_content.js";
import Assets from "../../../../assets/Assets.js";
import "./education.css";

const ListContent = ({
  institute,
  gradeType,
  grade,
  degree,
  degreeType,
  duration,
}) => {
  return (
    <li className="education-list-content">
      <p>
        <span className="institute-name">{institute}</span>
        <span className="grade">
          {gradeType == "CGPA" ? gradeType : null} {grade}
          {gradeType == "%" ? gradeType : null}
        </span>
      </p>
      <p className="degree-info">
        <span>
          <img className="arrow" src={Assets.rightArrow}></img>
        </span>
        <span className="degree">{degree}</span>
        <span className="degree-type">{degreeType}</span>
        <span className="degree-duration">
          {duration.from} - {duration.to}
        </span>
      </p>
    </li>
  );
};

const Education = () => {
  const nitp = LeftPaneContent.education.graduate;
  const hsc = LeftPaneContent.education.schooling.hsc;
  const ssc = LeftPaneContent.education.schooling.ssc;

  return (
    <>
      <p className="education-heading">Education</p>
      <ul className="education-unordered-list">
        <ListContent
          institute={nitp.college}
          gradeType={"CGPA"}
          grade={nitp.cgpa}
          degree={nitp.degree}
          degreeType={nitp.stream}
          duration={nitp.duration}
        />
        <ListContent
          institute={hsc.school}
          gradeType={"%"}
          grade={hsc.percentage}
          degree={hsc.stream}
          duration={hsc.duration}
        />
        <ListContent
          institute={ssc.school}
          gradeType={"CGPA"}
          grade={ssc.cgpa}
          degree={ssc.stream}
          duration={ssc.duration}
        />
      </ul>
    </>
  );
};

export default Education;
