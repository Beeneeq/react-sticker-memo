import React from 'react'

const ContextMenu = ({ show, x, y, onClickWrite }) => {
  return (
    <ul className="context-list" style={{display: show ? 'block' : 'none', left: `${x}px`, top: `${y}px`}}>
        <li className="context-item">
          <button type="button" className="context-btn" onClick={onClickWrite}>메모남기기</button>
        </li>
    </ul>
  )
}

export default ContextMenu