import { useState } from 'react'

function App() {
  const [value, setValue] = useState(0)

  return (
    <>
      <p className='text-center text-3xl'>Counter: {value}</p>
      <button className='border border-b-cyan-950 px-3 py-1 rounded-xs cursor-pointer' onClick={() => setValue(value + 1)}
        >Press Me
      </button>
    </>
  )
}

export default App
