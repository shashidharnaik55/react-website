import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'
import Services from './components/Services'

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
