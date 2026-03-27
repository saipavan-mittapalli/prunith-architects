import { useReveal } from './hooks/useReveal.js'
import Navbar from './Components/Navbar.jsx'
import Hero from './Components/Hero.jsx'
import Services from './Components/Services.jsx'
import Portfolio from './Components/Portfolio.jsx'
import Contact from './Components/Contact.jsx'
import Footer from './Components/Footer.jsx'
import './App.css'

function App() {
  useReveal();
  
  return (
    <>
      <main className='main-wrapper'>
        <Navbar />
        <Hero />
        <Services />
        <Portfolio />
        
        <Contact />
        <Footer />


      </main>
    </>
  )
}

export default App
