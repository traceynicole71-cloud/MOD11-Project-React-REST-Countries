import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count] = useState(0)

  return (
  <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-6 max-w-5xl mx-auto flex items-center justify-center">
     <section
        id="center"
          className="bg-white rounded-3xl shadow-xl p-10 w-full"
>        <div className="flex flex-col items-center text-center gap-6">
          <div className="hero flex items-center justify-center gap-6 flex-wrap mb-4">
            <img src={heroImg} className="base" width="170" height="179" alt="" />
            <img src={reactLogo} className="framework" alt="React logo" />
            <img src={viteLogo} className="vite" alt="Vite logo" />
          </div>

         <div className="space-y-5 max-w-md">
           <h1 className="text-4xl font-bold bg-red-500 px-6 py-3 rounded-2xl shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer">
           Get started
            </h1>
            <p className="text-gray-600 leading-relaxed"></p>
              Edit <code>src/App.tsx</code> and save to test <code>HMR</code>
              
            <p className="text-sm font-medium text-gray-500">
  Count is {count}
</p>
           <p className="text-gray-500 font-medium">Documentation</p>
            <p className="text-gray-500">Your questions, answered</p>
          </div>

          <div id="social" className="pt-6 border-t border-gray-200">
            <h2 className="text-lg font-semibold text-gray-700">
  Connect with us
</h2>
            <p className="text-gray-500">
  Join the Vite community
</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App