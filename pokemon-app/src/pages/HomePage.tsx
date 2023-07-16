import { useEffect, useState } from "react"
import { getPokemonList } from "../service/api-service"
import { PokemonDetail } from "../models/pokemon.model"
import "./HomePage.css"

function HomePage() {
    const[pokemon, setPokemon] = useState<PokemonDetail[]>([])

    useEffect(() => {
      getPokemonList(300, 0).then((response) => setPokemon(response!.results))
    }, [])
    
    return (
      < div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly"
      }}>
       {pokemon.map((e, i) => (
       
          <div
          key={i}
           className="container"
           >       
      <p key={e.name}>{e.name}</p>
      <img key={i} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i+1}.png`}></img>
</div>
       
       ))}
      </div>
    )
}
export default HomePage

