const Character = ({character}) => {

    return (
        <li className="character-info"><strong>Character:</strong>  {character.name} <br/>
            <strong>Gender:</strong> {character.gender} <br/>
            <strong>Species:</strong> {character.species} <br/>
            <strong>House:</strong> {character.house} <br/>
            <img className="image" src={character.image} alt="image" />
            <br/>
        </li>
    )
}

export default Character;