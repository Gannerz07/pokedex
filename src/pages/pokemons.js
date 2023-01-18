import {db} from "../core/firebase-config";
import {collection, getDocs} from "firebase/firestore";

const Pokemons = () => {
    const pokemons = []; // intialise an empty variable to hold our pokemon

    // function to get pokemon out of firestore
    const getPokemons = async () => { // async is needed whenever fetching data
        const pokemonsRef = collection(db, "pokemons"); // this is how we reference the collection from firestore
        const pokemonsSnap = await getDocs(pokemonsRef); // create a snapshot of the data, await is needed here
        try {
            // if there is more than 0 documents in this collection
            if (pokemonsSnap.docs.length > 0) {
                // for each document in this collection do...
                pokemonsSnap.forEach (
                    // add each document into the array (pokemons line 5)
                    doc => (pokemons.push({...doc.data(), id:doc.id}))
                )
            }
        }
        catch (error) {
            console.log(error);
        }
    }
    getPokemons();
    console.log(pokemons);
    return ( 
        <div>
            {pokemons.map((pokemon) => {
                console.log(pokemon);
                return (
                    <div key={pokemon.id}><h1>{pokemon.name}</h1></div>
                )
            })}
            test
        </div>
     );
}
 
export default Pokemons;