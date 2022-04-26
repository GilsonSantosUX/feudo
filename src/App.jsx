import { useState } from 'react'
import logo from './assets/logo.svg'
import './styles/styles.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <img src={logo} className="App-logo" alt="logo" />
      <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
      </button>
    </>
  )
}

export default App