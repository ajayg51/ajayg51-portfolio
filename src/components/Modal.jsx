import { createPortal } from "react-dom";
import "../css/modal.css"

const Modal = () => {
  return createPortal(<ModalContent/>, document.getElementById("modal"));
};
export default Modal;

const ModalContent = ()=>{
  return <>
    <div className="modal">
      <p className="p-style">Still in dev phase!</p>
    </div>  
  </>
}

