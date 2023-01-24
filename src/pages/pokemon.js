import { useParams } from "react-router-dom";
import {doc, getDoc} from "firebase/firestore";
import {db} from "../core/firebase-config";
import { useEffect, useState } from "react";

const Pokemon = () => {
    const {id} = useParams();
    const docRef = doc(db, "pokemons", id);

    const [ pokemon, setPokemon ] = useState("");

    useEffect(() => {
        const getPokemon = async () => {
            const docSnap = await getDoc(docRef);
            setPokemon(docSnap.data());
        };
        getPokemon();
        }, [docRef]);

    return ( 
        <h1>{ pokemon.name }</h1>
     );
}
 
export default Pokemon;