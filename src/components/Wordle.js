import React, {useEffect} from 'react'
import useWordle from '../hooks/useWordle'
import Grid from './Grid';
import Keypad from './Keypad';

export default function Wordle({ solution }) {

    const { currentGuess, handleKeyUp, guesses, isCorrect, turn, usedKeys} = useWordle(solution)

    useEffect(() =>{
        window.addEventListener('keyup',handleKeyUp);

        if(isCorrect){
          console.log('congrats, you win!')
          window.removeEventListener('keyup',handleKeyUp)
        }

        if(turn > 5){
          console.log('unlucky, out of guesses')
          window.removeEventListener('keyup',handleKeyUp)
        }

        return () => window.removeEventListener('keyup',handleKeyUp);
    },[handleKeyUp, isCorrect])

    

  return (
    <div>
      <div>solution - {solution}</div>
      <div>Wordle - {currentGuess}</div>
      <Grid guesses={guesses} currentGuess={currentGuess} turn={turn}/>
      <Keypad usedKeys={usedKeys}/>
    </div>
  )
}
