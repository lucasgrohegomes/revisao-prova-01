import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Gallery from './components/Gallery'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Header />
    <Gallery />
    <Footer />
  )
}

export default App
