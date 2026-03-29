import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { About } from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import './App.css'

function App() {


  return (
    <>
      <Navbar />
      <div className="background1">
        <Home />
      </div>
      <About />
      <Portfolio />
      <Contact />
    </>
  )
}

export default App
