import Character from "./Character";

const CharacterList = ({characters}) => {
    const characterComponents = characters.map((character, index) => {
        return <Character character={character} key={index}/>;
    });

    return (
        <ul className="character-list">
            {characterComponents}
        </ul>
    )
}

export default CharacterList;