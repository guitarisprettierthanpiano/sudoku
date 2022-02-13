import * as React from 'react';
import { NavLink } from 'react-router-dom';


//this is puzzle #1 from https://www.printablesudoku99.com/pdf/EasySudoku001.pdf
const Puzzle1: React.FC = () => {

    //this will cycle the clicked number between 0 and 9. if 0, it is hidden
    const Increment = (ev) => {
        ev.style.display = 'flex'
        const current_number:number = Math.round(ev.innerHTML)

        ev.style.color = 'rgb(56, 174, 244)'
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

        const b1:string = document.getElementById('b1').innerHTML
        const b2:string = document.getElementById('b2').innerHTML
        const b3:string = document.getElementById('b3').innerHTML
        const b4:string = document.getElementById('b4').innerHTML
        const b5:string = document.getElementById('b5').innerHTML
        const b6:string = document.getElementById('b6').innerHTML
        const b7:string = document.getElementById('b7').innerHTML

        const c1:string = document.getElementById('c1').innerHTML
        const c2:string = document.getElementById('c2').innerHTML
        const c3:string = document.getElementById('c3').innerHTML
        const c4:string = document.getElementById('c4').innerHTML

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
        const f3:string = document.getElementById('f3').innerHTML

        const g1:string = document.getElementById('g1').innerHTML
        const g2:string = document.getElementById('g2').innerHTML
        const g3:string = document.getElementById('g3').innerHTML
        const g4:string = document.getElementById('g4').innerHTML

        const h1:string = document.getElementById('h1').innerHTML
        const h2:string = document.getElementById('h2').innerHTML
        const h3:string = document.getElementById('h3').innerHTML
        const h4:string = document.getElementById('h4').innerHTML

        const i1:string = document.getElementById('i1').innerHTML
        const i2:string = document.getElementById('i2').innerHTML
        const i3:string = document.getElementById('i3').innerHTML
        const i4:string = document.getElementById('i4').innerHTML
        const i5:string = document.getElementById('i5').innerHTML


        if (
            (a1 === '6') && (a2 === '3') && (a3 === '9') 
            && (b1 === '8') && (b2 === '3') && (b3 === '2') && (b4 === '5') && (b5 === '6') && (b6 === '1') && (b7 === '7') 
            && (c1 === '6') && (c2 === '7') && (c3 === '1') && (c4 === '3')
            && (d1 === '1') && (d2 === '7') && (d3 === '9') && (d4 === '4') && (d5 === '5') && (d6 === '6')
            && (e1 === '9') && (e2 === '6') && (e3 === '5') && (e4 === '8') && (e5 === '3') 
            && (f1 === '5') && (f2 === '3') && (f3 === '7')
            && (g1 === '4') && (g2 === '1') && (g3 === '3') && (g4 === '6')
            && (h1 === '3') && (h2 === '7') && (h3 === '5') && (h4 === '4')
            && (i1 === '7') && (i2 === '9') && (i3 === '8') && (i4 === '6') && (i5 === '2')
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
            to='/p5'>
            <span className='arrows'>&#11013;</span>
        </NavLink>

        <h1><a href='./././images/sol1.png' target='_blank' title='Solution'>Puzzle #1</a></h1>
        
        <NavLink
            activeClassName='active'
            to='/p2'>
            <span className='arrows'>&#10145;</span>
        </NavLink>

        </div>

        <div className='sudoku-board'>
            <div className='sudoku-subboard'>
                <span>1</span>
                <span>4</span>
                <span>2</span>
                <span>7</span>
                <span className='hoverable'
                style={{ color: 'rgba(0,0,0,0)' }}
                onClick={ev => Increment(ev.target)}
                id='a1'>0</span>
                <span className='hoverable'
                style={{ color: 'rgba(0,0,0,0)' }}
                onClick={ev => Increment(ev.target)}
                id='a2'>0</span>
                <span>8</span>
                <span className='hoverable'
                style={{ color: 'rgba(0,0,0,0)' }}
                onClick={ev => Increment(ev.target)}
                id='a3'>0</span>
                <span>5</span>
            </div>
            <div className='sudoku-subboard'>
                <span className='hoverable'
                style={{ color: 'rgba(0,0,0,0)' }}
                onClick={ev => Increment(ev.target)}
                id='b1'>0</span>
                <span>9</span>
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
                <span className='hoverable'
                style={{ color: 'rgba(0,0,0,0)' }}
                onClick={ev => Increment(ev.target)}
                id='b6'>0</span>
                <span className='hoverable'
                style={{ color: 'rgba(0,0,0,0)' }}
                onClick={ev => Increment(ev.target)}
                id='b7'>0</span>
            </div>
            <div className='sudoku-subboard'>
                <span className='hoverable'
                style={{ color: 'rgba(0,0,0,0)' }}
                onClick={ev => Increment(ev.target)}
                id='c1'>0</span>
                <span className='hoverable'
                style={{ color: 'rgba(0,0,0,0)' }}
                onClick={ev => Increment(ev.target)}
                id='c2'>0</span>
                <span>5</span>
                <span className='hoverable'
                style={{ color: 'rgba(0,0,0,0)' }}
                onClick={ev => Increment(ev.target)}
                id='c3'>0</span>
                <span>8</span>
                <span>9</span>
                <span className='hoverable'
                style={{ color: 'rgba(0,0,0,0)' }}
                onClick={ev => Increment(ev.target)}
                id='c4'>0</span>
                <span>2</span>
                <span>4</span>
            </div>
            <div className='sudoku-subboard'>
                <span>2</span>
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
                <span>3</span>
                <span className='hoverable'
                style={{ color: 'rgba(0,0,0,0)' }}
                onClick={ev => Increment(ev.target)}
                id='d4'>0</span>
                <span className='hoverable'
                style={{ color: 'rgba(0,0,0,0)' }}
                onClick={ev => Increment(ev.target)}
                id='d5'>0</span>
                <span>8</span>
                <span className='hoverable'
                style={{ color: 'rgba(0,0,0,0)' }}
                onClick={ev => Increment(ev.target)}
                id='d6'>0</span>
            </div>
            <div className='sudoku-subboard'>
                <span className='hoverable'
                style={{ color: 'rgba(0,0,0,0)' }}
                onClick={ev => Increment(ev.target)}
                id='e1'>0</span>
                <span className='hoverable'
                style={{ color: 'rgba(0,0,0,0)' }}
                onClick={ev => Increment(ev.target)}
                id='e2'>0</span>
                <span>4</span>
                <span className='hoverable'
                style={{ color: 'rgba(0,0,0,0)' }}
                onClick={ev => Increment(ev.target)}
                id='e3'>0</span>
                <span className='hoverable'
                style={{ color: 'rgba(0,0,0,0)' }}
                onClick={ev => Increment(ev.target)}
                id='e4'>0</span>
                <span>1</span>
                <span className='hoverable'
                style={{ color: 'rgba(0,0,0,0)' }}
                onClick={ev => Increment(ev.target)}
                id='e5'>0</span>
                <span>7</span>
                <span>2</span>
            </div>
            <div className='sudoku-subboard'>
                <span>8</span>
                <span className='hoverable'
                style={{ color: 'rgba(0,0,0,0)' }}
                onClick={ev => Increment(ev.target)}
                id='f1'>0</span>
                <span className='hoverable'
                style={{ color: 'rgba(0,0,0,0)' }}
                onClick={ev => Increment(ev.target)}
                id='f2'>0</span>
                <span>2</span>
                <span>6</span>
                <span className='hoverable'
                style={{ color: 'rgba(0,0,0,0)' }}
                onClick={ev => Increment(ev.target)}
                id='f3'>0</span>
                <span>9</span>
                <span>4</span>
                <span>1</span>
            </div>
            <div className='sudoku-subboard'>
                <span className='hoverable'
                style={{ color: 'rgba(0,0,0,0)' }}
                onClick={ev => Increment(ev.target)}
                id='g1'>0</span>
                <span>5</span>
                <span className='hoverable'
                style={{ color: 'rgba(0,0,0,0)' }}
                onClick={ev => Increment(ev.target)}
                id='g2'>0</span>
                <span className='hoverable'
                style={{ color: 'rgba(0,0,0,0)' }}
                onClick={ev => Increment(ev.target)}
                id='g3'>0</span>
                <span>2</span>
                <span>8</span>
                <span className='hoverable'
                style={{ color: 'rgba(0,0,0,0)' }}
                onClick={ev => Increment(ev.target)}
                id='g4'>0</span>
                <span>7</span>
                <span>9</span>
            </div>
            <div className='sudoku-subboard'>
                <span>2</span>
                <span className='hoverable'
                style={{ color: 'rgba(0,0,0,0)' }}
                onClick={ev => Increment(ev.target)}
                id='h1'>0</span>
                <span>6</span>
                <span className='hoverable'
                style={{ color: 'rgba(0,0,0,0)' }}
                onClick={ev => Increment(ev.target)}
                id='h2'>0</span>
                <span className='hoverable'
                style={{ color: 'rgba(0,0,0,0)' }}
                onClick={ev => Increment(ev.target)}
                id='h3'>0</span>
                <span>9</span>
                <span>1</span>
                <span className='hoverable'
                style={{ color: 'rgba(0,0,0,0)' }}
                onClick={ev => Increment(ev.target)}
                id='h4'>0</span>
                <span>8</span>
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
                <span className='hoverable'
                style={{ color: 'rgba(0,0,0,0)' }}
                onClick={ev => Increment(ev.target)}
                id='i3'>0</span>
                <span>4</span>
                <span>1</span>
                <span className='hoverable'
                style={{ color: 'rgba(0,0,0,0)' }}
                onClick={ev => Increment(ev.target)}
                id='i4'>0</span>
                <span>5</span>
                <span>3</span>
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
            to='/p2'>
                <h2 className='arrows'>
                    Play Another? &#10145;
                </h2>
            </NavLink>
            <div></div>
        </div>
    </div>
    )
}

export default Puzzle1;