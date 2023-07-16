import { useEffect, useState } from "react"
import { getPokemonDetail } from "../service/api-service"
import { PokemonFlavor } from "../models/pokemon.model"

function DetailPage() {

    const [pokemonDetail, setPokemonDetail] = useState<PokemonFlavor[]>([])

    useEffect(() => {
        getPokemonDetail('charmeleon').then((response) => (setPokemonDetail(response!.flavor_text_entries)))
    
    }, [])

    return(
        <>
        {pokemonDetail.map((el)=>(<p>{el.flavor_text}</p>))}
        </>
    )
}

export default DetailPage