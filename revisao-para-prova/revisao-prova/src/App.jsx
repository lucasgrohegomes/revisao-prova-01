import { useState } from 'react'
import './style.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import Listitems from './components/Listitems'

function App() {
  const [count, setCount] = useState(0)

  return (
  <main>
    <Header />
    <Gallery />
    <Listitems />
    <Footer />
  </main>
  )
}

export default App
