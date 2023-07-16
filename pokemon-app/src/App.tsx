import { useEffect, useState } from 'react'
import './App.css'
import { PokemonDetail } from './models/pokemon.model'
import { getPokemonList } from './service/api-service'
import HomePage from './pages/HomePage'
import DetailPage from './pages/DetailPage'

function App() {
  
 return(
  <><HomePage></HomePage><DetailPage></DetailPage></>
 )
}

export default App
