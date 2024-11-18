
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Hero from './components/Hero/Hero'
import Container from './components/Container/Container'
import Categories from './components/Categories/Categories'
import PopularCourses from './components/PopularCourses/PopularCourses'
import Questions from './components/Questions/Questions'
import Client from './components/Client/Client'
import Logos from './components/Logos/Logos'
import Footer from './components/Footer/Footer'

function App() {
  const items = [{ text: "Home" },
  { text: "Courses" },
  { text: "About Us" },
  { text: "Works" },
  { text: "Blog" },
  { text: "Contact" }
  ]

  return (
    <>
      <NavBar items={items} btn="Signup" />
      <Hero/>
      <Container/>
      <Categories/>
      <PopularCourses/>
      <Questions/>
      <Client/>
      <Logos/>
      <Footer/>
    </>
  )
}

export default App
