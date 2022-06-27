import { useState } from 'react'

import { Landing, Loader, Navbar, Services, Transactions } from './components';

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="bg-yellow-300 -z-10 w-12 h-96 rounded-[100%] absolute lg:right-[32vw] md:right-[48vw] right-[60vw] -top-28 rotate-[20deg] blur-[80px] sm:opacity-30 opacity-10"/>
      <div className="bg-pink-300 -z-10 w-12 h-96 rounded-[100%] absolute lg:right-[24vw] md:right-[32vw] right-[48vw] -top-48 rotate-[20deg] blur-3xl sm:opacity-50 opacity-10"/>
      <div className="bg-blue-300 -z-10 w-12 h-96 rounded-[100%] absolute lg:right-[18vw] md:right-[24vw] right-[24vw] -top-4 rotate-[20deg] blur-[80px] sm:opacity-20 opacity-10"/>
      <div className="bg-green-300 -z-10 w-12 h-96 rounded-[100%] absolute lg:right-[6vw] md:right-[6vw] right-[6vw] -top-48 rotate-[20deg] blur-3xl sm:opacity-30 opacity-10"/>
      <div className="min-h-screen">
          <div>
            <Navbar />
            <Landing />
          </div>
          <Services />
          <Transactions />
      </div>
    </>
  )
}

export default App
