import React, { useEffect, useState } from 'react'

const TitleChange = () => {
    const [num, setNum] = useState(0);
    useEffect(() => {
        document.title = `you clicked ${num} times`;
})
  return (
    <>
      <button onClick={() => {setNum(num+1)}}>Click Me {num}</button>
    </>
  )
}

export default TitleChange;
