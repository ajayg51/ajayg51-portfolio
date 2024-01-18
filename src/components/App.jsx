import Header from "./header/Header";
import Content from "./content/Content";
import Footer from "./footer/Footer";
import Modal from "./Modal";
import { useState } from "react";


const App = () => {
  const [contentIdx, setContentIdx] = useState(0);
  
  const onLinkTap = (index) => {
    setContentIdx(index);
  };
  console.log("i : ");
  console.log(contentIdx);
  return (
    <>
      <div>
        <Header onLinkTap={onLinkTap}></Header>
        <Content contentIdx = {contentIdx}></Content>
        <Footer></Footer>
        {/* <Modal></Modal> */}
      </div>
    </>
  );
};

export default App;
