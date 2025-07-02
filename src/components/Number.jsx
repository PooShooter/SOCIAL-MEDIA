import React, { useState } from 'react'

const Number = () => {
const [number, setNumber] = useState(0)
function tambah() {
    setNumber("soap")
}
  return (
    <div>
        <h1>{number}</h1>
        <button onClick={tambah}>Add</button>
    </div>
  )
}

export default Number