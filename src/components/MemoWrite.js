import React, { useRef } from 'react'

const MemoWrite = ({ memoList, setMemoList, value, setValue, dim, setDim, x, y }) => {

    const memoInput = useRef()

    const makeMemo = () => {
        if (value === '') {
            memoInput.current.focus()
            return 
        }
        setDim(false)
        
        setMemoList([
            ...memoList,
            {
                value: value,
                x: x,
                y: y,
            }
        ])

        setValue('')
        console.log(memoList)
    }

    const onChange = (e) => {
        setValue(e.target.value)
      }
      
    return (
        <div className='memo-box' data-on={dim}>
            <input type='text' placeholder='메모 내용을 입력해 주세요' value={value} onChange={onChange} ref={memoInput}/>
            <button type='button' onClick={makeMemo}>등록하기</button>
        </div>
    )
}

export default MemoWrite