import React from 'react';
import '../styles.css';
import Iset from '../set'
import { useState } from 'react';
import TermsTable from '../components/TermsTable'
import { useNavigate } from 'react-router-dom';





function CreateSet() {
    const [term, setTerm] = useState("");
    const [definition, setDef] = useState("");
    const [name, setName] = useState("");
    const [current_set, updateSet] = useState<Iset>({ name: "study set", set: [] });
    const [counter, setCounter] = useState(0);
    const [nameEntered, setNameEntered] = useState(false);
    const navigate = useNavigate();




    //Ensures that a name is entered before submitting and the name that is entered has not already been attached to an existing set
    const handleNameSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        
        
        if (name === "") {
            alert("Please enter a name");
        }
        else {
            const all_sets = JSON.parse(localStorage.getItem('sets') || '[]');
            var matched = false;

            for (var i = 0; i < all_sets.length; i++) {
                if (all_sets[i].name === name) {
                    matched = true;
                    break;
                }
            }
            if (matched) {
                alert("This name is already in use, please choose another name.")
            }
            else {
                updateSet({ ...current_set, name: name });
                setNameEntered(true);
            }
            
        }

    }

    //Ensures that a term and definition is entered before submitting
    const handleTermSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (term === "" || definition === "") {
            alert("Please enter a term and definition");
        }
        else {
            current_set.set.push({ term, definition });
            updateSet(current_set);
            setCounter(counter + 1);
        }
        setTerm("")
        setDef("")
    }




    return (
        <div className="container">
            <h1>Create A New Set</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>

            {nameEntered ?
                <form onSubmit={handleTermSubmit}>
                    <label>Term Name
                        <textarea name="term" value={term} onChange={(e) => setTerm(e.target.value)} />
                    </label>
                    <br></br>
                    <label>Definition
                        <textarea name="definition" value={definition} onChange={(e) => setDef(e.target.value)} />
                    </label>
                    <br></br>
                    <input type="submit" value="Submit"></input>
                </form>
                :
                <form onSubmit={handleNameSubmit}>
                    <label>Set Name
                        <textarea name="name" value={name} onChange={(e) => setName(e.target.value)} />
                    </label>
                    <br></br>
                    <input type="submit" value="Submit"></input>
                </form>
            }
            <br></br>
            {nameEntered && current_set.set.length > 0 ?
                <div className="displaySet">
                    <h2>{name}</h2>
                    <button onClick={(e) => {
                        const all_sets = JSON.parse(localStorage.getItem('sets') || '[]');
                        all_sets.push(current_set)
                        localStorage.setItem("sets", JSON.stringify(all_sets))
                        navigate('/study', { state: { set: current_set } })
                    }}>Submit Set</button>
                    <TermsTable key={counter} set={current_set} />
                </div>
                : <></>}
        </div>
    );
}

export default CreateSet;
