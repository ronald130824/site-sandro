
import "./App.css"
import Header from "./components/common/heading/header"
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import About from "./components/about/About"
import CourseHome from "./components/allcourses/CourseHome"
import Home from "./components/common/home/Home"
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route  path='/' element={<Home/>} />
          <Route  path='/about' element={<About/>} />
          <Route  path='/courses' element={<CourseHome/>} />
          {/* <Route exact path='/team' component={Team} /> */}
          {/* <Route exact path='/pricing' component={Pricing} /> */}
          {/* <Route exact path='/journal' component={Blog} /> */}
          {/* <Route exact path='/contact' component={Contact} /> */}
          {/* <Footer /> */}
        </Routes>
      </Router>
    </>
  )
}

export default App
