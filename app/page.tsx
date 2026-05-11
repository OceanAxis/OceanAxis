import Header from './components/Header'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main>
     
      <Hero />
      <Stats />
      <Services />
      <About />
      <Contact />
    
    </main>
  )
}