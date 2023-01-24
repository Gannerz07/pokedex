import { useState } from "react";
import {db} from "../core/firebase-config";
import {doc, setDoc} from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const AddPokemon = () => {
    const [number, setNumber] = useState("");
    const [newName, setNewName] = useState("");
    const [newType, setNewType] = useState("");
    const [newClassification, setNewClassification] = useState("");
    const navigate = useNavigate();

    const addPokemon = async (e) => {
        e.preventDefault();
        try {
            await setDoc(doc(db, "pokemons", number), {
                name: newName,
                type: newType,
                classification: newClassification
            })
            navigate("/")
        } 
        catch (err) {
            console.error(err)
        }
    }

    return ( 
        <>
        <h1>Add Pokemon</h1>
        <form className="p-4 bg-slate-100 rounded-sm flex flex-col">
            <input className="p-2 mb-2" placeholder="Enter Pokemon number" onChange={ (e) => {setNumber(e.target.value)} } />
            <input className="p-2 mb-2" placeholder="Enter Pokemon name" onChange={ (e) => {setNewName(e.target.value)} } />
            <input className="p-2 mb-2" placeholder="Enter Pokemon type" onChange={ (e) => {setNewType(e.target.value)} } />
            <input className="p-2 mb-2" placeholder="Enter Pokemon classification" onChange={ (e) => {setNewClassification(e.target.value)} } />
            <button className="p-2 bg-accent text-white hover:bg-blue-700 mt-2" onClick={addPokemon}>Add Pokemon</button>
        </form>
        </>
     );
}
 
export default AddPokemon;