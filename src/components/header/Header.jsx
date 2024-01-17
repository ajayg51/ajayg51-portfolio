import "../../css/header.css";
import headerLinks from "../../utils/header_links";
import { useState } from "react";

const HeaderLinks = ({ linkClassName, linkUnderlineClassName }) => {
  const linkTappedIdxMap = {
    0: true,
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
  };
  const [linkIdxTapMap, setLinkIdxTapMap] = useState(linkTappedIdxMap);
  const onTapLink = (index) => {
    // unsetting prev selected
    for (let item in linkIdxTapMap) {
      linkIdxTapMap[item] = false;
    }
    // setting new state
    setLinkIdxTapMap((prevState) => {
      if (prevState[index]) return prevState;
      return {
        ...prevState,
        [index]: true,
      };
    });
  };
  return headerLinks.map((item, index) => (
    <li
      key={index}
      className={
        linkIdxTapMap[index]
          ? `${linkClassName} ${linkUnderlineClassName}`
          : linkClassName
      }
      onClick={() => onTapLink(index)}
    >
      {item}
    </li>
  ));
};

const Header = () => {
  const linkClassName = "link";
  const linkUnderlineClassName = "link-underline";
  return (
    <>
      <div className="header">
        <ul className="header-links">
          <HeaderLinks
            linkClassName={linkClassName}
            linkUnderlineClassName={linkUnderlineClassName}
          ></HeaderLinks>
        </ul>
      </div>
    </>
  );
};

export default Header;
