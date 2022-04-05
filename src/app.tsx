import React from 'react';
import { Switch, HashRouter, Route } from 'react-router-dom';

const Puzzle1: React.LazyExoticComponent<React.FC<{}>> = React.lazy(() => import("./components/puzzle1"));
const Puzzle2: React.LazyExoticComponent<React.FC<{}>> = React.lazy(() => import("./components/puzzle2"));
const Puzzle3: React.LazyExoticComponent<React.FC<{}>> = React.lazy(() => import("./components/puzzle3"));
const Puzzle4: React.LazyExoticComponent<React.FC<{}>> = React.lazy(() => import("./components/puzzle4"));
const Puzzle5: React.LazyExoticComponent<React.FC<{}>> = React.lazy(() => import("./components/puzzle5"));

import Rightside from './components/rightside';

const App: React.FC = () => {

    React.useEffect(() => {
        //removing right click because it is annoying when accidently clicking it instead of left click.
        addEventListener("contextmenu", function (e) {
            e.preventDefault();
        }, false);
        
    }, [])

    return(
        <HashRouter>
            <Switch>
                <React.Suspense fallback={<p className='loading'>Loading page...</p>}>
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
                </React.Suspense>
            </Switch>
            
            <Rightside/>
        </HashRouter>
    )
}

export default App;