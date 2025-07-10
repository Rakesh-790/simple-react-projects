import { useState } from 'react'


function App() {
  const [color, setColor] = useState("white")

  return (
    <div className="w-full h-screen " style={{ backgroundColor: color }}> 
      <div className="fixed flex flex-wrap justify-center bottom-25 px-2 inset-x-0">
        <div className="fixed flex flex-wrap justify-center gap-3 shadow-lg px-2 py-2 rounded-2xl bg-white ">
          <button className="outline-none bg-white px-3 py-2 rounded-full text-white shadow-lg" 
          style={{ backgroundColor: "brown" }} onClick={() => setColor("brown")}>
            brown
          </button>
          <button className="outline-none bg-white px-3 py-2 rounded-full text-white shadow-lg" 
          style={{ backgroundColor: "green" }} onClick={() => setColor("green")}>
            green
          </button>
          <button className="outline-none bg-white px-3 py-2 rounded-full text-white shadow-lg" 
          style={{ backgroundColor: "black" }} onClick={() => setColor("black")}>
            black
          </button>
          <button className="outline-none bg-white px-3 py-2 rounded-full text-white shadow-lg" 
          style={{ backgroundColor: "aqua" }} onClick={() => setColor("aqua")}>
            aqua
          </button>
          <button className="outline-none bg-white px-3 py-2 rounded-full text-white shadow-lg" 
          style={{ backgroundColor: "grey" }} onClick={() => setColor("grey")}>
            grey
          </button>
          <button className="outline-none bg-white px-3 py-2 rounded-full text-white shadow-lg" 
          style={{ backgroundColor: "purple" }} onClick={() => setColor("purple")}>
            purple
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
