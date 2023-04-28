import React from 'react';
import '../styles.css';
import Iset from '../set'
import {useState} from 'react';
import TermsTable from '../components/TermsTable'
import { useNavigate } from 'react-router-dom';





function CreateSet() {
  
  const [term, setTerm] = useState("");
  const [definition, setDef] = useState("");
  const [name, setName] = useState("");
  const [current_set, updateSet] = useState<Iset>({name : "study set", set : []});
  const [counter, setCounter] = useState(0);
  const [nameEntered, setNameEntered] = useState(false);
  const navigate = useNavigate();


  const handleNameSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (name === "") {
        alert("Please enter a name");
    }
    else {
        updateSet({...current_set, name : name});
        setNameEntered(true);
    }

  }

  const handleTermSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (term === "" || definition === "") {
        alert("Please enter a term and definition");
    }
    else {
        current_set.set.push({term, definition});
        updateSet(current_set);
        setCounter(counter+1);
    }
    
    console.log("submitted!");
    console.log(current_set.set);
    console.log(counter)
  }




  return (
    <div className="container">
      <h1>Create A New Set</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
        
        {nameEntered ? 
            <form onSubmit={handleTermSubmit}>
                <label>Term Name
                <input type="text" name="term" onChange={(e) => setTerm(e.target.value)}/>
                </label>
                <br></br>
                <label>Definition
                <input type="text" name="definition" onChange={(e) => setDef(e.target.value)}></input>
                </label>
                <br></br>
                <input type="submit" value="Submit"></input>
            </form>
        : 
            <form onSubmit={handleNameSubmit}>
                <label>Set Name
                <input type="text" name="name" onChange={(e) => setName(e.target.value)}/>
                </label>
                <br></br>
                <input type="submit" value="Submit"></input>
            </form>
        }
        <br></br>
        {nameEntered ?
            <div>
                <h2>{name}</h2>
                <TermsTable key={counter} set={current_set}/>
                <button onClick={(e) => navigate('/study', {state : {set: current_set}})}>Submit Set</button>
            </div>
        :<></>}
          
      
      
    </div>
  );
}

export default CreateSet;
