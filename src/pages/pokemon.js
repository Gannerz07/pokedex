import { useParams } from "react-router-dom";
import {doc, getDoc} from "firebase/firestore";
import {db} from "../core/firebase-config";
import { useEffect, useState } from "react";

const Pokemon = () => {
    const [ pokemon, setPokemon ] = useState("");
    const {id} = useParams();

    useEffect(() => {
        const docRef = doc(db, "pokemons", id);
        const getPokemon = async () => {
            const docSnap = await getDoc(docRef);
            setPokemon(docSnap.data());
        };
        getPokemon();
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []);

    return ( 
        <h1>{ pokemon.name }</h1>
     );
}
 
export default Pokemon;