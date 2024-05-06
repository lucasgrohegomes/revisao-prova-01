import { useState } from 'react'
import './style.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Gallery from './components/Gallery'


function App() {
  const [count, setCount] = useState(0)

  return (
  <main>
    <Header />
    <Gallery />
    <Footer />
  </main>
  )
}

export default App
