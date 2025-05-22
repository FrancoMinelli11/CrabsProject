import { usePokeById } from "../../hooks/usePokeById";
import { Button } from "../Button.jsx/Button";

export const GetPoke = () => {
    const {pokemon,setRandom} = usePokeById()
    return (
        <>
            <h1 className="text-3xl font-bold text-blue-500 text-center capitalize">
                {pokemon?.name}
            </h1>
            <img src={pokemon?.sprites.front_shiny} alt={pokemon?.name} />
            <Button onClick={() => setRandom(Math.floor(Math.random() * 1000))}>
                Get Random Pokemon
            </Button>
        </>
    );
};
