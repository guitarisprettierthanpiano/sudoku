import * as React from 'react';
import { useEffect } from 'react';
import { Switch, HashRouter, Route } from 'react-router-dom';

import Puzzle1 from './components/puzzle1'
import Puzzle2 from './components/puzzle2'
import Puzzle3 from './components/puzzle3'
import Puzzle4 from './components/puzzle4'
import Puzzle5 from './components/puzzle5';

import Rightside from './components/rightside';

const App: React.FC = () => {


    useEffect(() => {

        //removing right click because it is annoying when accidently clicking it instead of left click.
        addEventListener("contextmenu", function (e) {
            e.preventDefault();
        }, false);
        
    }, [])

    return(
        <HashRouter>
            <Switch>
                <Route exact path='/'
                component={Puzzle1}/>

                <Route path='/p2'
                component={Puzzle2}/>

                <Route path='/p3'
                component={Puzzle3}/>

                <Route path='/p4'
                component={Puzzle4}/>

                <Route path='/p5'
                component={Puzzle5}/>
            </Switch>
            
            <Rightside/>
        </HashRouter>
    )
}

export default App;