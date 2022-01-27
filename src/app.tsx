import * as React from 'react';

import Main from './components/main'

const App: React.FC = () => {


    return(
        <>
        <h1>Sudoku</h1>
        
        <Main/>

        <div className='right-side'></div>

        </> 
    )
}

export default App;