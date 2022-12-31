import './Modal.css';
import { TiPlus } from "react-icons/ti"
import { useState } from 'react';

const Modal = ({ children, heading, active, toggleActive }) => {  
  return (
    <>
      <div className={`modal-${active ? "active" : "inactive"}`}>
        <div className="modal-head">
          <h1 className="modal-heading">{heading}</h1>
          <button onClick={toggleActive}>
            {/* I could not find an X icon (:< */}
            <TiPlus style={{transform: "rotate(45deg)"}}/>
          </button>
        </div>
        {children}
      </div>
      <button onClick={toggleActive} className={`modal-overlay-${active ? "active" : "inactive"}`}/>
    </>
  )
}

export default Modal;