import './Modal.css';
import { TiPlus } from "react-icons/ti"

const Modal = ({ children, heading, active, toggleActive, color }) => {  
  return (
    <>
      <div className={`modal-${active ? "active" : "inactive"}`}>
        <div className="modal-head">
          <h1 className="modal-heading">{heading}</h1>
          <button className="modal-toggle" onClick={toggleActive}>
            {/* I could not find an X icon (:< */}
            <TiPlus style={{transform: "rotate(45deg)", color: {color}}}/>
          </button>
        </div>
        {children}
      </div>
      <button onClick={toggleActive} className={`modal-overlay-${active ? "active" : "inactive"}`}/>
    </>
  )
}

export default Modal;