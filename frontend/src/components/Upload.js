import React from 'react'
import './Upload.css'

const Upload = ({ children, show, handleClose }) => {
  const showHide = show ? "modal display-block" : "modal display-none"
  return (
    <div className={showHide}>
      <section className="modal-main">
        {children}
        <button onClick={handleClose}>close</button>
      </section>
    </div>
  )
}

export default Upload