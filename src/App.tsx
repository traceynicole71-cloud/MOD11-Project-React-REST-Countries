import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count] = useState(0)

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <section id="center">
        <div className="flex flex-col items-center text-center gap-6">
          <div className="hero">
            <img src={heroImg} className="base" width="170" height="179" alt="" />
            <img src={reactLogo} className="framework" alt="React logo" />
            <img src={viteLogo} className="vite" alt="Vite logo" />
          </div>

          <div>
            <h1 className="bg-red-500">Get started</h1>
            <p>
              Edit <code>src/App.tsx</code> and save to test <code>HMR</code>
            </p>
            <p>Count is {count}</p>
            <p>Documentation</p>
            <p>Your questions, answered</p>
          </div>

          <div id="social">
            <h2>Connect with us</h2>
            <p>Join the Vite community</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App