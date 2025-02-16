import { useReducer, useRef } from "react";
import PersonList from './PersonList'; 

const LisPersone = () => {
    const Nom = useRef();
    const Prenom = useRef();
    const Age = useRef();

    const [list, dispatch] = useReducer((state = [], action) => {
        switch (action.type) {
            case 'add_task': {
                return [
                    ...state,
                    { 
                        id:state.length,
                         nom: action.nom,
                         prenom: action.prenom,
                          age: action.age }
                ];
            }
            case 'remove_task': {
                return state.filter(task => task.id !== action.id);
            }
            default: {
                return state;
            }
        }
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        const nom = Nom.current.value;
        const prenom = Prenom.current.value;
        const age = Age.current.value;

        if (nom && prenom && age) {
            dispatch({ type: 'add_task', nom, prenom, age });
            Nom.current.value.trim() ;
            Prenom.current.value.trim();
            Age.current.value.trim() ;
        }
    };

    return (
        <div className="flex" style={{ flexDirection: "column" }}>
            <h1> Liste aver UseReducer</h1>
            <form onSubmit={handleSubmit} id="Formstyle" className="flex" style={{ flexDirection: "column" }}>
                <label> Nom :</label>
                <input type="text" name="nom" ref={Nom} />
                <label>Prenom  :</label>
                <input type="text" name="prenom" ref={Prenom} />
                <label>Age  :</label>
                <input type="text" name="age" ref={Age} />
                <input style={{ marginTop: "30px" }} type="submit" value="ajouter" />
            </form>
            <PersonList list={list} onRemove={(id) => dispatch({ type: 'remove_task', id })} />
        </div>
    );
};

export default LisPersone;




