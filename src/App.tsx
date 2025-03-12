import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Toy from './components/toy'
import PingPongOuter from './components/pingpong-outer'
import PingPong from './components/pingpong'
function App() {
  const [count, setCount] = useState(0)

  return (

    // <Toy ></Toy>
    <div className="container">
      <PingPongOuter>
        <PingPong></PingPong>
      </PingPongOuter>
    </div>
  )
}

export default App
