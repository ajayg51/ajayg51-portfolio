import Assets  from "../assets/Assets";
import Header from "./header/Header";
import  Content from "./content/Content";
import Footer from "./footer/Footer";
import Modal from "./Modal";

const App = ()=>{
    return (<>
    <div>
        <Header></Header>
        <Content></Content>
        <Footer></Footer>
        <Modal></Modal>
    </div>
    
    </>);
}

export default App;