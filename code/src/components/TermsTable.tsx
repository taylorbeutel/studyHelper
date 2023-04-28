import React from 'react';
import '../styles.css';
import Iset from '../set'

function TermsTable(props : {key: number, set: Iset}) {
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