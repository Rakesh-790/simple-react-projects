import { useState, useCallback, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'

function App() {
  const [length, setLength] = useState(5)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')

  const ref = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

    if (charAllowed) str += "!~@#$%&*?" 
    if (numberAllowed) str += "0123456789" 

    for (let i = 1; i < length; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length + 1))
    }
    setPassword(pass)
  },
    [length, numberAllowed, charAllowed, setPassword])

  useEffect(() => {passwordGenerator()}, 
  [length, charAllowed, numberAllowed, passwordGenerator])

  const copyPassword = () => { ref.current?.select();
    ref.current?.setSelectionRange(0, 100);
    if (window.navigator.clipboard.writeText(password)) {
      alert('Password copied to clipboard!')
    } else 
      alert('Failed to copy password to clipboard!'),
    [password]
  }

  

  return (
    <>
      <div className="w-full max-w-md mx-auto my-10 px-4 bg-violet-300 text-gray-900 rounded-lg shadow-lg text-center">
        Password Generator
        <div className="flex rounded-lg shadow mb-4 overflow-hidden my-4 ">
          <input type="text"
            value={password}
            className='outline-none w-full px-1 py-1 bg-yellow-100 text-black  rounded-lg'
            placeholder='password'
            readOnly
            ref={ref}
          />
          <div className='outline-none px-2 text-shadow-black font-bold'>
            <button 
            onClick={() => {copyPassword()}}
            onMouseOut={() => {hoverMouse()}}
            className='outline-none bg-white px-3 py-0.5 shrink-0 rounded-xl my-1'>copy</button>
          </div>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1 my-1'>
            <input type="range"
              min={5}
              max={20}
              value={length}
              className='cursor-pointer'
              onChange={(c) => { setLength(c.target.value) }}
            />
            <label>length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1 my-1'>
            <input type="checkbox"
              defaultChecked = {numberAllowed}
              onChange={() => { setNumberAllowed((prev) => !prev) }}
            />
            <label className='font-semibold'>addNumber</label>
          </div>
          <div className='flex items-center gap-x-1 my-1'>
            <input type="checkbox"
              defaultChecked = {charAllowed}
              onChange={() => { setCharAllowed((prev) => !prev) }}
            />
            <label className='font-semibold'>addCharecter</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
