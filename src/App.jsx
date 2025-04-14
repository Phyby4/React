import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Blog from './pages/Blog';
import Resumes from './pages/Resumes'
import Portfolio from './pages/Portfolio'
import Contacts from './pages/Contacts'
import Nbar from './components/Nbar'
import Footer from './components/Footer'
import Home from './pages/Home'
function App() {
  return (
    <div>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Portfolio' element={<Portfolio/>}/>
        <Route path='/blog' element={<Blog />} />
        <Route path='/Resumes' element={<Resumes/>}/>
        <Route path='/Contacts' element={<Contacts/>}/>
        <Route path='/Nbar' element={<Nbar/>}/>
        <Route path='/Footer' element={<Footer/>}/>
      </Routes>
    </Router>
    </div>
  )
}

export default App

