import * as React from 'react';

const Rightside: React.FC = () =>{

    
    //clicking the reset button will reset the cell values to 0 and make them transparent again
    const ResetPuzzle = () => {
        const puzzle_array: NodeListOf<HTMLElement> = document.querySelectorAll('.hoverable')

        for (let i = 0; i < puzzle_array.length; i++){
            puzzle_array[i].style.color = 'rgba(0,0,0,0)';
            puzzle_array[i].innerHTML = '0';
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