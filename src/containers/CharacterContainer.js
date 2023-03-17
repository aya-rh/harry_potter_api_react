import { useEffect, useState } from "react";
import CharacterList from "../components/CharacterList";

const CharacterContainer = () => {
    const [characters, setCharacters] = useState([])

    useEffect(() => {
        updateList();
    }, [])

    const updateList = () => {
        fetch("https://hp-api.onrender.com/api/characters")
        .then(response => response.json())
        .then(jsonData => setCharacters(jsonData));
    }

    return (
        <>
            {characters ? <CharacterList characters={characters}/> : <p>Loading...</p> }
        </>
    );
}

export default CharacterContainer;