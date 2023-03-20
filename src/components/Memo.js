import React from 'react'

const Memo = ({ value, x, y }) => {
    const memo = value
  return (
    <div className='memo' style={{left: `${x}px`, top: `${y}px`}}>
        <p>{memo}</p>
    </div>
  )
}

export default Memo