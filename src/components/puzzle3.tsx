import * as React from 'react';
import { NavLink } from 'react-router-dom';


//this is puzzle #3 from https://www.printablesudoku99.com/pdf/EasySudoku001.pdf
const Puzzle3: React.FC = () => {

    //this will cycle the clicked number between 0 and 9. if 0, it is hidden
    const Increment = (ev) => {
        ev.style.display = 'inline'
        const current_number:number = Math.round(ev.innerHTML)

        ev.style.color = 'rgba(255,0,0,1)'
        ev.innerHTML = ((current_number + 1).toString())


        if (current_number > 8){
            ev.innerHTML = 0;

            ev.style.color='rgba(0,0,0,0)'
        }

        //lets check if we won...
        DidYaWinSon()
    }

    //this will check if the input numbers match the final solution.
    const DidYaWinSon = () =>{
        const a1:string = document.getElementById('a1').innerHTML
        const a2:string = document.getElementById('a2').innerHTML
        const a3:string = document.getElementById('a3').innerHTML
        const a4:string = document.getElementById('a4').innerHTML

        const b1:string = document.getElementById('b1').innerHTML
        const b2:string = document.getElementById('b2').innerHTML
        const b3:string = document.getElementById('b3').innerHTML
        const b4:string = document.getElementById('b4').innerHTML
        const b5:string = document.getElementById('b5').innerHTML

        const c1:string = document.getElementById('c1').innerHTML
        const c2:string = document.getElementById('c2').innerHTML
        const c3:string = document.getElementById('c3').innerHTML
        const c4:string = document.getElementById('c4').innerHTML
        const c5:string = document.getElementById('c5').innerHTML
        const c6:string = document.getElementById('c6').innerHTML

        const d1:string = document.getElementById('d1').innerHTML
        const d2:string = document.getElementById('d2').innerHTML
        const d3:string = document.getElementById('d3').innerHTML
        const d4:string = document.getElementById('d4').innerHTML
        const d5:string = document.getElementById('d5').innerHTML
        const d6:string = document.getElementById('d6').innerHTML

        const e1:string = document.getElementById('e1').innerHTML
        const e2:string = document.getElementById('e2').innerHTML
        const e3:string = document.getElementById('e3').innerHTML
        const e4:string = document.getElementById('e4').innerHTML
        const e5:string = document.getElementById('e5').innerHTML

        const f1:string = document.getElementById('f1').innerHTML
        const f2:string = document.getElementById('f2').innerHTML

        const g1:string = document.getElementById('g1').innerHTML
        const g2:string = document.getElementById('g2').innerHTML
        const g3:string = document.getElementById('g3').innerHTML

        const h1:string = document.getElementById('h1').innerHTML
        const h2:string = document.getElementById('h2').innerHTML
        const h3:string = document.getElementById('h3').innerHTML
        const h4:string = document.getElementById('h4').innerHTML
        const h5:string = document.getElementById('h5').innerHTML

        const i1:string = document.getElementById('i1').innerHTML
        const i2:string = document.getElementById('i2').innerHTML
        const i3:string = document.getElementById('i3').innerHTML
        const i4:string = document.getElementById('i4').innerHTML
        const i5:string = document.getElementById('i5').innerHTML


        if (
            (a1 === '5') && (a2 === '2') && (a3 === '3') && (a4 === '1') 
            && (b1 === '6') && (b2 === '3') && (b3 === '7') && (b4 === '2') && (b5 === '8')
            && (c1 === '3') && (c2 === '6') && (c3 === '1') && (c4 === '4') && (c5 === '7') && (c6 === '9')
            && (d1 === '4') && (d2 === '6') && (d3 === '1') && (d4 === '8') && (d5 === '5') && (d6 === '3')
            && (e1 === '3') && (e2 === '9') && (e3 === '7') && (e4 === '1') && (e5 === '5')
            && (f1 === '5') && (f2 === '7')
            && (g1 === '3') && (g2 === '6') && (g3 === '9')
            && (h1 === '5') && (h2 === '7') && (h3 === '1') && (h4 === '9') && (h5 === '4')
            && (i1 === '7') && (i2 === '9') && (i3 === '3') && (i4 === '4') && (i5 === '5')
        ){
            const schmekle:HTMLElement = document.querySelector('.sudoku-board')
            schmekle.style.display = 'none'

            const schlepper:HTMLElement = document.querySelector('.winning-container')
            schlepper.style.display = 'grid'
        }
    }


    return(

    <div className='main-container'>
        <div className='nav'>

        <NavLink
            activeClassName='active'
            to='/p2'>
            <span className='arrows'>&#11013;</span>
        </NavLink>

        <h1><a href='../images/sol3.png' target='_blank' title='Solution'>Puzzle #3</a></h1>
        
        <NavLink
            activeClassName='active'
            to='/p4'>
            <span className='arrows'>&#10145;</span>
        </NavLink>

        </div>

        <div className='sudoku-board'>
            <div className='sudoku-subboard'>
                <span>4</span>
                <span className='hoverable'
                style={{ color: 'rgba(0,0,0,0)' }}
                onClick={ev => Increment(ev.target)}
                id='a1'>0</span>
                <span>7</span>
                <span className='hoverable'
                style={{ color: 'rgba(0,0,0,0)' }}
                onClick={ev => Increment(ev.target)}
                id='a2'>0</span>
                <span>9</span>
                <span>8</span>
                <span>6</span>
                <span className='hoverable'
                style={{ color: 'rgba(0,0,0,0)' }}
                onClick={ev => Increment(ev.target)}
                id='a3'>0</span>
                <span className='hoverable'
                style={{ color: 'rgba(0,0,0,0)' }}
                onClick={ev => Increment(ev.target)}
                id='a4'>0</span>
            </div>
            <div className='sudoku-subboard'>
                <span className='hoverable'
                style={{ color: 'rgba(0,0,0,0)' }}
                onClick={ev => Increment(ev.target)}
                id='b1'>0</span>
                <span>9</span>
                <span>1</span>
                <span className='hoverable'
                style={{ color: 'rgba(0,0,0,0)' }}
                onClick={ev => Increment(ev.target)}
                id='b2'>0</span>
                <span>4</span>
                <span className='hoverable'
                style={{ color: 'rgba(0,0,0,0)' }}
                onClick={ev => Increment(ev.target)}
                id='b3'>0</span>
                <span className='hoverable'
                style={{ color: 'rgba(0,0,0,0)' }}
                onClick={ev => Increment(ev.target)}
                id='b4'>0</span>
                <span className='hoverable'
                style={{ color: 'rgba(0,0,0,0)' }}
                onClick={ev => Increment(ev.target)}
                id='b5'>0</span>
                <span>5</span>
            </div>
            <div className='sudoku-subboard'>
                <span className='hoverable'
                style={{ color: 'rgba(0,0,0,0)' }}
                onClick={ev => Increment(ev.target)}
                id='c1'>0</span>
                <span>2</span>
                <span>8</span>
                <span>5</span>
                <span className='hoverable'
                style={{ color: 'rgba(0,0,0,0)' }}
                onClick={ev => Increment(ev.target)}
                id='c2'>0</span>
                <span className='hoverable'
                style={{ color: 'rgba(0,0,0,0)' }}
                onClick={ev => Increment(ev.target)}
                id='c3'>0</span>
                <span className='hoverable'
                style={{ color: 'rgba(0,0,0,0)' }}
                onClick={ev => Increment(ev.target)}
                id='c4'>0</span>
                <span className='hoverable'
                style={{ color: 'rgba(0,0,0,0)' }}
                onClick={ev => Increment(ev.target)}
                id='c5'>0</span>
                <span className='hoverable'
                style={{ color: 'rgba(0,0,0,0)' }}
                onClick={ev => Increment(ev.target)}
                id='c6'>0</span>
            </div>
            <div className='sudoku-subboard'>
                <span>9</span>
                <span className='hoverable'
                style={{ color: 'rgba(0,0,0,0)' }}
                onClick={ev => Increment(ev.target)}
                id='d1'>0</span>
                <span className='hoverable'
                style={{ color: 'rgba(0,0,0,0)' }}
                onClick={ev => Increment(ev.target)}
                id='d2'>0</span>
                <span className='hoverable'
                style={{ color: 'rgba(0,0,0,0)' }}
                onClick={ev => Increment(ev.target)}
                id='d3'>0</span>
                <span className='hoverable'
                style={{ color: 'rgba(0,0,0,0)' }}
                onClick={ev => Increment(ev.target)}
                id='d4'>0</span>
                <span className='hoverable'
                style={{ color: 'rgba(0,0,0,0)' }}
                onClick={ev => Increment(ev.target)}
                id='d5'>0</span>
                <span>7</span>
                <span>2</span>
                <span className='hoverable'
                style={{ color: 'rgba(0,0,0,0)' }}
                onClick={ev => Increment(ev.target)}
                id='d6'>0</span>
            </div>
            <div className='sudoku-subboard'>
                <span>8</span>
                <span className='hoverable'
                style={{ color: 'rgba(0,0,0,0)' }}
                onClick={ev => Increment(ev.target)}
                id='e1'>0</span>
                <span>2</span>
                <span className='hoverable'
                style={{ color: 'rgba(0,0,0,0)' }}
                onClick={ev => Increment(ev.target)}
                id='e2'>0</span>
                <span className='hoverable'
                style={{ color: 'rgba(0,0,0,0)' }}
                onClick={ev => Increment(ev.target)}
                id='e3'>0</span>
                <span>6</span>
                <span className='hoverable'
                style={{ color: 'rgba(0,0,0,0)' }}
                onClick={ev => Increment(ev.target)}
                id='e4'>0</span>
                <span className='hoverable'
                style={{ color: 'rgba(0,0,0,0)' }}
                onClick={ev => Increment(ev.target)}
                id='e5'>0</span>
                <span>4</span>
            </div>
            <div className='sudoku-subboard'>
                <span>1</span>
                <span className='hoverable'
                style={{ color: 'rgba(0,0,0,0)' }}
                onClick={ev => Increment(ev.target)}
                id='f1'>0</span>
                <span className='hoverable'
                style={{ color: 'rgba(0,0,0,0)' }}
                onClick={ev => Increment(ev.target)}
                id='f2'>0</span>
                <span>2</span>
                <span>4</span>
                <span>3</span>
                <span>9</span>
                <span>8</span>
                <span>6</span>
            </div>
            <div className='sudoku-subboard'>
                <span className='hoverable'
                style={{ color: 'rgba(0,0,0,0)' }}
                onClick={ev => Increment(ev.target)}
                id='g1'>0</span>
                <span>1</span>
                <span>4</span>
                <span>5</span>
                <span className='hoverable'
                style={{ color: 'rgba(0,0,0,0)' }}
                onClick={ev => Increment(ev.target)}
                id='g2'>0</span>
                <span>2</span>
                <span>8</span>
                <span>7</span>
                <span className='hoverable'
                style={{ color: 'rgba(0,0,0,0)' }}
                onClick={ev => Increment(ev.target)}
                id='g3'>0</span>
            </div>
            <div className='sudoku-subboard'>
                <span className='hoverable'
                style={{ color: 'rgba(0,0,0,0)' }}
                onClick={ev => Increment(ev.target)}
                id='h1'>0</span>
                <span>6</span>
                <span>8</span>
                <span className='hoverable'
                style={{ color: 'rgba(0,0,0,0)' }}
                onClick={ev => Increment(ev.target)}
                id='h2'>0</span>
                <span className='hoverable'
                style={{ color: 'rgba(0,0,0,0)' }}
                onClick={ev => Increment(ev.target)}
                id='h3'>0</span>
                <span className='hoverable'
                style={{ color: 'rgba(0,0,0,0)' }}
                onClick={ev => Increment(ev.target)}
                id='h4'>0</span>
                <span className='hoverable'
                style={{ color: 'rgba(0,0,0,0)' }}
                onClick={ev => Increment(ev.target)}
                id='h5'>0</span>
                <span>2</span>
                <span>3</span>
            </div>
            <div className='sudoku-subboard'>
                <span className='hoverable'
                style={{ color: 'rgba(0,0,0,0)' }}
                onClick={ev => Increment(ev.target)}
                id='i1'>0</span>
                <span className='hoverable'
                style={{ color: 'rgba(0,0,0,0)' }}
                onClick={ev => Increment(ev.target)}
                id='i2'>0</span>
                <span>2</span>
                <span>8</span>
                <span className='hoverable'
                style={{ color: 'rgba(0,0,0,0)' }}
                onClick={ev => Increment(ev.target)}
                id='i3'>0</span>
                <span className='hoverable'
                style={{ color: 'rgba(0,0,0,0)' }}
                onClick={ev => Increment(ev.target)}
                id='i4'>0</span>
                <span>6</span>
                <span>1</span>
                <span className='hoverable'
                style={{ color: 'rgba(0,0,0,0)' }}
                onClick={ev => Increment(ev.target)}
                id='i5'>0</span>
            </div>
        </div>

        <div className='winning-container' style={{display:'none'}}>
            <div></div>
            <h1>You Won!</h1>
            <NavLink
            activeClassName='active'
            to='/p4'>
                <h2 className='arrows'>
                    Play Another? &#10145;
                </h2>
            </NavLink>
            <div></div>
        </div>
    </div>
    )
}

export default Puzzle3;