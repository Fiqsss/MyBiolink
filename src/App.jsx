// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Layer1 from './assets/layer/Intersect.png'
import Layer2 from './assets/layer/Intersect2.png'

import Header from './components/header'
import Body from './components/body'
import './index.css'
function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='mx-auto flex items-center flex-col h-[100vh] relative overflow-x-hidden bg-primaryC'>
      <Header />
      <Body />
      <footer className='z-20'>
        <p className='text-white text-[12px]'>Copyright © 2024 Nur Muhammad Arofiq</p>
      </footer>
      <img className='absolute bottom-[-10rem] md:bottom-[-18rem] left-[-3rem] md:left-0' src={Layer2} alt="" />
      <img className='absolute top-3 md:right-0 right-[-9rem]' src={Layer1} alt="" />
    </div>
  )
}

export default App
