import "./header.css";

import ProfileLinks from "./profile_links.js";
import Assets from "../../assets/Assets.js";
import headerLinks from "../../utils/header_links";
import { useState } from "react";
import { useContext } from "react";
import { HeaderLinkContext } from "../../utils/context.jsx";

const HeaderLinks = ({ linkClassName, linkUnderlineClassName }) => {
  const { setIdx } = useContext(HeaderLinkContext);

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

      const newState = {
        ...prevState,
        [index]: true,
      };

      setIdx(index);
      return newState;
    });
  };

  let headerLinkList = headerLinks.map((item, index) => (
    <span
      key={index}
      className={
        linkIdxTapMap[index]
          ? `${linkClassName} ${linkUnderlineClassName}`
          : linkClassName
      }
      onClick={() => onTapLink(index)}
    >
      {item}
    </span>
  ));

  headerLinkList.push(
    <ul className="profile-links">
      <li>
        <a  href={ProfileLinks.leetcode} target="leetcode">
          <img className="links" src={Assets.leetcodeLogo} alt="leetcodeLogo" />
        </a>
      </li>
      <li>
        <a  href={ProfileLinks.linkedin} target="linkedin">
          <img className="links" src={Assets.linkedinLogo} alt="linkedinLogo" />
        </a>
      </li>
      <li>
        <a  href={ProfileLinks.github} target="github">
          <img className="links" src={Assets.githubLogo} alt="githubLogo" />
        </a>
      </li>
    </ul>
  );

  return headerLinkList;
};

const Header = () => {
  const linkClassName = "link";
  const linkUnderlineClassName = "link-underline";
  return (
    <>
      <div className="header">
        <HeaderLinks
          linkClassName={linkClassName}
          linkUnderlineClassName={linkUnderlineClassName}
        ></HeaderLinks>
      </div>
    </>
  );
};

export default Header;
