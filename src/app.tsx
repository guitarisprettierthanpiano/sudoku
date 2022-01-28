import * as React from 'react';

import Main from './components/main'

const App: React.FC = () => {

    //clicking the reset button will reset the cell values to 0 and make them transparent again
    const ResetPuzzle = () => {
        const puzzle_array: NodeListOf<HTMLElement> = document.querySelectorAll('.hoverable')

        for (let i = 0; i < puzzle_array.length; i++){
            puzzle_array[i].style.color = 'rgba(0,0,0,0)';
            puzzle_array[i].innerHTML = '0';
        }
    }


    return(
        <>
        <h1>Sudoku</h1>
        
        <Main/>

        <div className='right-side'>
            <button onClick = {() => ResetPuzzle()}>reset puzzle</button>
        </div>

        </> 
    )
}

export default App;