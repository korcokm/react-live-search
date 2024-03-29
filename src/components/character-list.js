import React from 'react';

export default function CharacterList(props) {
    const characters = props.characters.map((character, index) =>
        <li key={index}>
            <strong>{character.name}</strong> ({character.actor}) - {character.description}
        </li>
    )

    return (
        <div>
            <h4>Character count: {characters.length}</h4>
            <ul className="character-list">
                {characters}
            </ul>
        </div>
    );
}