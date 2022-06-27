import { useState } from 'react'
import './App.css'

import { Landing, Loader, Navbar, Services, Transactions } from './components';

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen">
        <div>
          <Navbar />
          <Landing />
        </div>

        <Services />
        <Transactions />
    </div>
  )
}

export default App
