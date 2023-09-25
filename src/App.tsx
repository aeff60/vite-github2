import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Category from './pages/Category'
import About from './pages/About'
import Footer from './components/Footer'
import PF from './pages/PF'
import WD from './pages/WD'
import ML from './pages/ML'
import DS from './pages/DS'
import IntroToPython from './pages/IntroToPython'
import AdvancedJavaScript from './pages/AdvancedJavaScript'
import MachineLearning from './pages/MachineLearning'
import DataScience from './pages/DataScience'
import Chapter1 from './pages/Chapter1'
import Chapter2 from './pages/Chapter2'


function App() {
  return(
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/category' element={<Category />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/contact' element={<Contact />}/>
      <Route path='/PF' element={<PF />}/>
      <Route path='/WD' element={<WD />}/>
      <Route path='/ML' element={<ML />}/>
      <Route path='/DS' element={<DS />}/>
      <Route path='/introtopython' element={<IntroToPython />}/>
      <Route path='/advancedjavascript' element={<AdvancedJavaScript />}/>
      <Route path='/machinelearning' element={<MachineLearning />}/>
      <Route path='/datascience' element={<DataScience />}/>
      <Route path='/chapter1' element={<Chapter1 />}/>
      <Route path='/chapter2' element={<Chapter2 />}/>
      
    </Routes>
  )
}

function WrappedApp() {
  return(
    <BrowserRouter>
      <Nav />
      <App />
      <Footer />
    </BrowserRouter>
  )
}

export default WrappedApp
