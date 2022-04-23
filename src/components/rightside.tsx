import React from 'react';
import { useAppSelector } from '../app/hooks'

const Rightside: React.FC = () =>{
    const currentPuzzNumb: number = useAppSelector(state => state.puzzleNumber.value)

    //clicking the reset button will reset the cell values to 0 and make them transparent again
    const ResetPuzzle: () => void = () => {

        const cellArray: NodeListOf<HTMLElement> = document.querySelectorAll('.hoverable')
        for (let i: number = 0; i < cellArray.length; i++){
            cellArray[i].style.color = 'rgba(0,0,0,0)';
            cellArray[i].innerHTML = '0';
        } 

        //clearing local storage storing cell numbers. using redux to figure out which puzz# is open.
        for(let j: number = 1; j < 10; j++){
            const alphabetArray: string[] = ['a','b','c','d','e','f','g','h','i']
            for (let k: number = 0; k < alphabetArray.length; k++){
                localStorage.removeItem(`${currentPuzzNumb}${alphabetArray[k]}${j}`);
            }
        }
    }

    return(
    <div className='right-side'>
        <button onClick = {() => ResetPuzzle()}>Reset</button>
        <a href='https://sudoku.com/how-to-play/sudoku-rules-for-complete-beginners/' target='_blank'>How To Play</a>
    </div>
    )
}

export default Rightside;