import { useState } from 'react'

function App() {
  const [value, setValue] = useState(0)

  return (
    <button onClick={() => setValue(value + 1)}>{value}</button>
  )
}

export default App
