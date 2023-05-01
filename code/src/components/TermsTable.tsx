import React from 'react';
import '../styles.css';
import Iset from '../set'

//TODO: IMPLEMENT A WAY TO EDIT A TERM
function TermsTable(props: {set: Iset }) {
  return (
    <table>
      <tr><th>Term</th><th>Definition</th></tr>
      {props.set.set.map(item => {
        return <tr><td>{item.term}</td><td>{item.definition}</td></tr>
      })}
    </table>
  )
}

export default TermsTable;