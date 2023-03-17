const Character = ({character}) => {

    return (
        <li className="character-info"><strong>Character:</strong>  {character.name} <br/>
            <strong>Gender:</strong> {character.gender} <br/>
            <strong>Species:</strong> {character.species} <br/>
            <strong>House:</strong> {character.house} <br/>
            <br/>
        </li>
    )
}

export default Character;