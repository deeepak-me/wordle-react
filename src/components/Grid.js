import React from 'react'
import Row from './Row'

export default function Grid({guesses, currentGuess, turn}) {
  return (
    <div>
        {guesses.map((g, i) =>{
            return <Row key={{i}} guess={g} />
        })}
    </div>
  )
}
