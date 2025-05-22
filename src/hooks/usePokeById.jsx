import { useEffect, useState } from "react";
import { getPokemonById } from "../services/pokemon.service";
export const usePokeById = () => {
    const [pokemon, setPokemon] = useState(null);
    const [random, setRandom] = useState(1);
    useEffect(() => {
        getPokemonById(random)
        .then((data) => {
            setPokemon(data)
        })
    }, [random]);
    return {pokemon,setRandom}
}