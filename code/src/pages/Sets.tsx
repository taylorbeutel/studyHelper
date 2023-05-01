import React from 'react';
import '../styles.css';
import Iset from '../set'
import { useNavigate } from 'react-router-dom';




function Sets() {
    const navigate = useNavigate();

    const all_sets_json = JSON.parse(localStorage.getItem('sets') || '[]');
    const all_sets = []
    for (let i = 0; i < all_sets_json.length; i++) {
        var current_set : Iset = {name : all_sets_json[i].name, set : all_sets_json[i].set}
        all_sets.push(current_set)
    }

    return(
        <div>
            <h1>Sets</h1>

            <div className="flex-container wrapper">
            {all_sets.map(current_set => {
            return (
                <div>
                <div className="setCard content" onClick={(e) => navigate('/study', {state : {set: current_set}})}>
                    <p id="cardIdentifier">{current_set.set.length} terms</p>
                    <br></br>
                    <p>{current_set.name}</p>
                </div>
                <br></br>
                </div>
            )
        })}
            </div>
        </div>
    );
}

export default Sets;