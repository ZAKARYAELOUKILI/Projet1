// PersonList.js
import React from 'react';

const PersonList = ({ list, onRemove }) => {
    return (
        <div>
            {list.map((person) => (
                <div className="app" key={person.id} style={{ border: "solid teal 5px", margin: "15px" }}>
                    <p> votre Nom est : {person.nom}</p>
                    <p> votre Prenom est :{person.prenom}</p>
                    <p> votre Age est :{person.age}</p>
                    <button onClick={() => onRemove(person.id)}>
                        Supprimer
                    </button>
                </div>
            ))}
        </div>
    );
};

export default PersonList;