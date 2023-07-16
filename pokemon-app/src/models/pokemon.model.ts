export type PokemonList = {
    count: number,
    next: string | null,
    previous: string | null,
    results: PokemonDetail[],
};

export type PokemonDetail = {
    name: string;
    url: string;
    weight: number;
}

export type PokemonAbility = {
    flavor_text_entries: PokemonFlavor[]
}

export type PokemonFlavor = {
    flavor_text: string
}