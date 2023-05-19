import './App.css'
import Navbar from './component/Navbar'
import LandingPage from './component/LandingPage'
import Card from './component/Card'
import CoursePage from './component/CoursePage'
import About from './component/About'

function App() {

  return (
    <>
      <section id='landingSection'>
      <Navbar/>
      <LandingPage/>
      </section>
      <section id='cardSection'>
      <Card/>
      </section>
      <section id='courseSection'>
      <CoursePage/>
      </section>
      <section id='aboutSection' >
      <About/>
      </section>
    </>
  )
}

export default App
