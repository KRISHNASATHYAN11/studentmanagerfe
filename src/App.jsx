
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import Studentdetails from './pages/Studentdetails'
import Footer from './Components/Footer'
import Home from './pages/Home'


function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/students' element={<Studentdetails/>}/>
    </Routes>
    <Footer/>

    
     
    </>
  )
}

export default App
