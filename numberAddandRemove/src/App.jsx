import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Child from './components/child'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  let addValue = () => {
    if (count > 19) {
      alert("can't increase");
    }else setCount(count + 1)
  }

  let removeValue = () => {
    if (count < 1) {
      alert("can't decrease");
    }else setCount(count - 1)
  }

  return (
    <>
      <h1>Count Value is {count}</h1>
      <div className="card">
        <button onClick={addValue}>
          addValue
        </button>
      </div>
      <div className="card">
        <button onClick={removeValue}>
          removeValue
        </button>
        <Child name1={"rock"}/>
        <Child name1={"rocky"}/>
      </div>
    </>
  )
}

export default App
