import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import DetailPage from './pages/DetailPage'


function App() {
  
 return(
    <>
    <BrowserRouter>
    <Routes>
       <Route path='/' Component={HomePage}/>
        <Route path='/:name' Component={DetailPage}/>
    </Routes>

    </BrowserRouter>
   
    </>
 )
}

export default App
