import {db} from "../core/firebase-config";
import {collection, getDocs} from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Pokemons = () => {
    const [pokemons, setPokemons] = useState([]);
    const pokemonsRef = collection(db, "pokemons"); // this is how we reference the collection from firestore
    
    useEffect(() => {
        const getPokemons = async () => {
          const data = await getDocs(pokemonsRef);
          setPokemons(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
    
        getPokemons();
      }, [ pokemonsRef ]);

    console.log(pokemons)
    return ( 
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {pokemons.map((pokemon) => {
                return (

                    <Link to={`pokemons/${pokemon.id}`} key={pokemon.id} >
                        <div className="p-4 bg-neutral-100 rounded-lg shadow-xl">
                            <h1>{pokemon.id} {pokemon.name}</h1>
                            <img alt={`This Pokemon is called ${pokemon.name}`} src={`https://www.serebii.net/pokemon/art/${pokemon.id}.png`} />
                            <h2>Type: {pokemon.type}</h2>
                            <h3>{pokemon.classification}</h3>
                        </div>
                    </Link>
                )
            })}
        </div>
     );
}
 
export default Pokemons;