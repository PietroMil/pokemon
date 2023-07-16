import { useEffect, useState } from "react"
import { getPokemonDetail } from "../service/api-service"
import { PokemonFlavor } from "../models/pokemon.model"
import { useNavigate, useParams } from "react-router-dom";

function DetailPage() {
    const { name }  = useParams();
    const navigate = useNavigate();


    const [pokemonDetail, setPokemonDetail] = useState<PokemonFlavor[]>([])

    useEffect(() => {
        getPokemonDetail(`${name}`).then(async (response) => setPokemonDetail(response!.flavor_text_entries))
    }, [])

    return(
        <>
        <button onClick={() => navigate('/')}>Go BAck</button>
        {pokemonDetail.map((el, i)=>(<p key={i}>{el.flavor_text}</p>))}
        </>
    )
}

export default DetailPage