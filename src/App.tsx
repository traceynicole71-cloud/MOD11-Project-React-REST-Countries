import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-gray-300 p-8 max-w-6xl mx-auto flex items-center justify-center">
      <section
        id="center"
        className="bg-white rounded-3xl shadow-2xl p-12 w-full max-w-3xl space-y-10"
      >
        <div className="flex flex-col items-center text-center gap-8">
          <div className="hero flex items-center justify-center gap-8 flex-wrap mb-6">
            <img src={heroImg} className="base" width="170" height="179" alt="" />
            <img src={reactLogo} className="framework" alt="React logo" />
            <img src={viteLogo} className="vite" alt="Vite logo" />
          </div>

          <div className="space-y-7 max-w-lg text-center">
            <h1 className="text-5xl font-extrabold bg-red-500 text-white tracking-wide px-10 py-4 rounded-2xl shadow-lg hover:scale-105 hover:bg-red-600 transition-all duration-300 cursor-pointer inline-block">
              Get started
            </h1>

            <p className="text-gray-600 leading-relaxed">
              Edit <code>src/App.tsx</code> and save to test <code>HMR</code>
            </p>

            <p className="text-sm font-medium text-gray-400 tracking-wide">
              Count is {count}
            </p>

            <p className="font-semibold text-gray-700">
              Documentation
            </p>

            <p className="text-gray-600 italic">
              Your questions, answered
            </p>
          </div>

          <div
            id="social"
            className="pt-8 border-t border-gray-200 space-y-2"
          >
            <h2 className="text-xl font-semibold text-gray-700">
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