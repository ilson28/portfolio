
import './App.css'
import AboutMe from './components/AboutMe'
import Contact from './components/Contact'
import Education from './components/Education'
import Hero from './components/Hero'
import Proyects from './components/Proyects'
import Technologies from './components/Technologies'

function App() {

  return (
    <div className='font-inter min-h-screen bg-bg-primary text-text-primary space-y-40'>
      <Hero />
      <Proyects />
      <Technologies />
      <Education />
      <AboutMe />
      <Contact />
    </div>
  )
}

export default App
