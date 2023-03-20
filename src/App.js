import React, { useState } from 'react';
import './App.css';
import ContextMenu from './components/ContextMenu';
import Memo from './components/Memo';
import MemoWrite from './components/MemoWrite';

function App() {

  const [dim, setDim] = useState(false)
  const [value, setValue] = useState('')
  const [x, setX] = useState('')
  const [y, setY] = useState('')
  const [show, setShow] = useState(false)
  const [memoList, setMemoList] = useState([])

  
  const onContextMenu = (e) => {
    e.preventDefault();
    
    setShow(true)
    setX(e.pageX)
    setY(e.pageY)
  }

  const onClick = (e) => {
    setShow(false)
  }

  const onClickWrite = (e) => {
    setDim(true)
    setShow(false)
  }

  return (
    <>
      <div 
        className="App"
        onContextMenu={onContextMenu}
        onClick={onClick}
      >
        <h1>우클릭으로 메모를 남겨보세요!</h1>
        {
          memoList.map(memo => {
            return <Memo value={memo.value} x={memo.x} y={memo.y}/>
          })
        }
      </div>
      <ContextMenu
        show={show}
        x={x}
        y={y}
        onClickWrite={onClickWrite}
      />
      <div 
        className='dim-bg' 
        data-on={dim}
      ></div>
      <MemoWrite
        memoList={memoList}
        setMemoList={setMemoList}
        value={value} 
        setValue={setValue} 
        dim={dim} 
        setDim={setDim}
        x={x}
        y={y}
      />
      
    </>
  );
}

export default App;
