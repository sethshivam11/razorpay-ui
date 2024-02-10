import './App.css'
import SideBar from './components/SideBar'
import Navbar from './components/Navbar'
import { useEffect, useState } from 'react'
import MainContent from './components/MainContent'

function App() {
  useEffect(() => {
    document.getElementsByTagName("html")[0].classList.add("bg-slate-800")
  }, [])
  const [navOpen, setNavOpen] = useState(false)
  return (
    <div className="w-screen min-h-screen bg-slate-800">
      <SideBar navOpen={navOpen} setNavOpen={setNavOpen} />
      <Navbar />
      <MainContent/>
      <div className={`fixed w-screen h-screen bg-gray-600/60 z-10 top-0 left-0 transition ease-linear duration-300 ${navOpen ? "": "hidden"}`} />
    </div>
  )
}

export default App
