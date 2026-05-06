import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count] = useState(0)

  return (
  <div className="min-h-screen bg-gray-100 p-6 max-w-5xl mx-auto flex items-center justify-center">
     <section
        id="center"
          className="bg-white rounded-3xl shadow-xl p-10 w-full"
>        <div className="flex flex-col items-center text-center gap-6">
          <div className="hero flex items-center justify-center gap-4 flex-wrap">
            <img src={heroImg} className="base" width="170" height="179" alt="" />
            <img src={reactLogo} className="framework" alt="React logo" />
            <img src={viteLogo} className="vite" alt="Vite logo" />
          </div>

         <div className="space-y-3">
           <h1 className="text-4xl font-bold bg-red-500 px-6 py-3 rounded-2xl shadow-md">
           Get started
            </h1>
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