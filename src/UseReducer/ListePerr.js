import { useReducer, useRef } from "react";



const LisPersone = () => {

    const inputRef = useRef();
    const inputRef1 = useRef();
    const inputRef2 = useRef();


    const [List, dispatch] = useReducer((state = [], action) => {
        switch (action.type) {
            case 'add_task': {
                return [
                    ...state,
                    { id: state.length, 
                        nom: action.nom ,
                         prenom: action.prenom ,
                          age: action.age }
                ]
            }
            case 'remove_task': {
                return state.filter((task, index) => index !== action.index);
            }
            default: {
                return state;
            }
        }
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({
            type: 'add_task',
            nom: inputRef.current.value ,
            prenom: inputRef1.current.value,
            age: inputRef2.current.value

        });
    }

    return <div className="flex"  style={{flexDirection:"column"}}> 
        <h1>Liste avec UseReducer</h1>
        <form onSubmit={handleSubmit} id="Formstyle" className="flex" style={{flexDirection:"column"}}>
            <label>Nom : </label>
            <input type="text" name="nom" ref={inputRef} />
            <label>Prenom  : </label>
            <input type="text" name="prenom" ref={inputRef1} />
            <label>age : </label>
            <input type="text" name="age" ref={inputRef2} />
            <input  style={{marginTop:"30px"}} type="submit" value="Ajouter" />
        </form>
        <div >
            {List && List.map((List, index) => (
                <div className="app" key={index} style={{border:"solid teal 5px",margin:"15px"}}>
                    <p> votre nom est :{List.nom}</p>
                    <p> votre prenom est :{List.prenom}</p>
                    <p> votre age est : {List.age}</p>

                    <button onClick={() => dispatch({ type: 'remove_task', index })}>
                        Supprimer
                    </button>
                </div>
            ))}
        </div>
    </div>
}

export default LisPersone;