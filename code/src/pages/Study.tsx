import React from 'react';
import '../styles.css';
import { useLocation } from 'react-router-dom';
import TermsTable from '../components/TermsTable'
import {useState} from 'react';


function Study() {
    const location = useLocation();
    const current_set  = location.state.set;

    const [studyMode, setStudyMode] = useState("");



    return(
        <div>
            {studyMode === "" ? 
                <div>
                <h1>{current_set.name}</h1>
                <TermsTable key={1} set={current_set}/>
                <ul>
                    <li><button onClick={(e) => setStudyMode("Flash Cards")}>Flash Cards</button></li>
                    <li><button onClick={(e) => setStudyMode("Write")}>Write</button></li>
                </ul>
                </div>
            :
                // TODO: IMPLEMENT STUDY MODES
                <div>
                    <p>{studyMode}</p>
                    <button onClick={(e) => setStudyMode("")}>Return to Viewing Set</button>
                </div> 
            }
            
        </div>
    );
}

export default Study;