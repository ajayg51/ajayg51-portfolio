import Header from "../header/Header";
import Content from "../content/Content";
import Footer from "../footer/Footer";
import Modal from "./Modal";
import { useState } from "react";
import { useContext } from "react";
import { HeaderLinkContext } from "../../utils/context.jsx";

const App = () => {
  const [idx,setIdx] = useState(0);

  return (
    <>
      <HeaderLinkContext.Provider value={{idx, setIdx}}>
        <Header></Header>
        <Content></Content>
        <Footer></Footer> 
        {/* <Modal></Modal> */}
      </HeaderLinkContext.Provider>
    </>
  );
};

export default App;
