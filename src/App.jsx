import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TopBar from './components/TopBar'
import Navbar from './components/NavBar'
import Hero from './components/Hero/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <TopBar/>
    <Navbar/>
    <Hero/>
    </>
  )
}

export default App
