import React from 'react';
import '../styles.css';
import { useLocation } from 'react-router-dom';
import TermsTable from '../components/TermsTable'
import { useState, useEffect } from 'react';
import Iset from '../set'

//Displays the current flash card and 'flips' it when clicked
function FlashCard(props: { counter: number, set: Iset }) {
    var current_card = props.set.set[props.counter]
    const [cardView, setCardView] = useState(current_card.definition)
    const [cardType, setCardType] = useState("Definition")


    return (
        <div className="card" onClick={(e) => {
            if (cardView === current_card.definition) {
                setCardView(current_card.term)
                setCardType("Term")
            }
            else {
                setCardView(current_card.definition)
                setCardType("Definition")
            }
        }}>
            <p id="cardIdentifier">{cardType}</p>
            <p>{cardView}</p>
        </div>
    )
}



function Write(props: { counter: number, set: Iset }) {

    const handleWriteSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        setSubmitted(true)
        if (current_card.term === answer) {
            setCorrect(true)
        }

    }

    var current_card = props.set.set[props.counter]
    const [answer, setAnswer] = useState("")
    const [correct, setCorrect] = useState(false)
    const [submitted, setSubmitted] = useState(false)
    const [showAnswer, setShowAnswer] = useState(false)

    useEffect(() => {
        setSubmitted(false);
        setAnswer("")
        setCorrect(false)
        setShowAnswer(false)
    }, [props.counter])

    return (
        <div>
            {submitted ?
                <form className="writeSubmitted">
                    {correct ? <p className="writeSubmittedTitle">Correct!</p> : <p className="writeSubmittedTitle">Study this one</p>}
                    <p>Definition: {current_card.definition}</p>
                    <p>Your answer: {answer}</p>
                    <p>Correct answer: {current_card.term}</p>
                </form>
                : showAnswer ?
                    <form className="writeSubmitted">
                        <p className="writeSubmittedTitle">Study this one</p>
                        <p>Definition: {current_card.definition}</p>
                        <p>Correct answer: {current_card.term}</p>
                    </form>
                    : <form onSubmit={handleWriteSubmit}>
                        <p>{current_card.definition}</p>
                        <textarea name="answer" value={answer} onChange={(e) => setAnswer(e.target.value)}></textarea>
                        <input type="submit" value="Submit"></input>
                        <button onClick={(e) => setShowAnswer(true)}>I don't know</button>
                    </form>
            }
        </div>
    )
}



function Study() {
    const location = useLocation();
    const current_set = location.state.set;

    const [studyMode, setStudyMode] = useState("");
    const [counter, setCounter] = useState(0);

    const StudyMenu = () => {
        return (
            <div className="studyMenu">
                <button onClick={(e) => {
                    if (counter !== 0) {
                        setCounter(counter - 1)
                    }
                }}>Move to Previous Card</button>

                <button onClick={(e) => {
                    if (counter !== current_set.set.length - 1) {
                        setCounter(counter + 1)
                    }
                }}>Move to Next Card</button>


                <button onClick={(e) => {
                    setStudyMode("")
                    setCounter(0)
                }}>Return to Set</button>
            </div>
        )
    }


    return (
        <div>
            {studyMode === "" ?
                <div>
                    <h1>{current_set.name}</h1>
                    <div className="modeMenu">
                        <button onClick={(e) => setStudyMode("Flash Cards")}>Flash Cards</button>
                        <button onClick={(e) => setStudyMode("Write")}>Write</button>
                    </div>
                    <TermsTable set={current_set} />

                </div>
                :

                studyMode === "Flash Cards" ?
                    <div>
                        <h1>{current_set.name} - {studyMode}</h1>
                        <FlashCard counter={counter} key={counter} set={current_set} />
                        <StudyMenu />
                    </div>
                    :
                    <div>
                        <h1>{current_set.name} - {studyMode}</h1>
                        <Write counter={counter} set={current_set} />
                        <StudyMenu />
                    </div>
            }

        </div>
    );
}

export default Study;