import "./header.css";
import headerLinks from "../../utils/header_links";
import { useState } from "react";
import { useContext } from "react";
import { HeaderLinkContext } from "../../utils/context.jsx";

const HeaderLinks = ({ linkClassName, linkUnderlineClassName }) => {
  const {setIdx} = useContext(HeaderLinkContext);

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

  return headerLinks.map((item, index) => (
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
