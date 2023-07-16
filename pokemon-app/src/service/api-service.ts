import { PokemonAbility, PokemonList } from "../models/pokemon.model";

const API_URL = "https://pokeapi.co/api/v2/pokemon/";

export const getPokemonList = async(limit: number, offset: number) => {
    try {
        const response = await fetch(`${API_URL}?limit=${limit}&offset=${offset}`)
        if(!response.ok){
            throw new Error('failed to fetch data')
        }
        const data: PokemonList = await response.json()
        return data
    }
    catch(error) {
        console.log(error)
    }
}

export const getPokemonDetail = async(name: string) => {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${name}`)
        if(!response.ok){
            throw new Error('failed to fetch data')
        }
        const data: PokemonAbility = await response.json()
        console.log(data)
        return data

    }
    catch(error) {
        console.log(error)
    }

}

