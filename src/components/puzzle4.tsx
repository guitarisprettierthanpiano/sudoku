import React from 'react';
import { NavLink } from 'react-router-dom';

import Solution from '../images/sol4.webp';
//this is puzzle #4 from https://www.printablesudoku99.com/pdf/EasySudoku001.pdf
import WinningImage from '../images/lol.webp'

const Puzzle4: React.FC = () => {

    //this will cycle the clicked number between 0 and 9. if 0, it is hidden
    const Increment = (ev) => {
        ev.style.display = 'flex'
        const current_number: number = Math.round(ev.innerHTML)

        ev.style.color = 'rgb(56, 174, 244)'
        ev.innerHTML = ((current_number + 1).toString())


        if (current_number > 8){
            ev.innerHTML = 0;

            ev.style.color='rgba(0,0,0,0)'
        }

        //updating local storage with the new number in that cell.
        const clickedCellText: string = document.getElementById(`${ev.id}`).innerHTML
        localStorage.setItem(`4${ev.id}`, clickedCellText);

        //lets check if we won...
        DidYaWinSon()
    }

    //this will check if the input numbers match the final solution.
    const DidYaWinSon: () => void = () =>{
        const a1:string = document.getElementById('a1').innerHTML
        const a2:string = document.getElementById('a2').innerHTML
        const a3:string = document.getElementById('a3').innerHTML
        const a4:string = document.getElementById('a4').innerHTML
        const a5:string = document.getElementById('a5').innerHTML

        const b1:string = document.getElementById('b1').innerHTML
        const b2:string = document.getElementById('b2').innerHTML
        const b3:string = document.getElementById('b3').innerHTML
        const b4:string = document.getElementById('b4').innerHTML

        const c1:string = document.getElementById('c1').innerHTML
        const c2:string = document.getElementById('c2').innerHTML
        const c3:string = document.getElementById('c3').innerHTML
        const c4:string = document.getElementById('c4').innerHTML

        const d1:string = document.getElementById('d1').innerHTML
        const d2:string = document.getElementById('d2').innerHTML
        const d3:string = document.getElementById('d3').innerHTML
        const d4:string = document.getElementById('d4').innerHTML
        const d5:string = document.getElementById('d5').innerHTML

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
        const g4:string = document.getElementById('g4').innerHTML
        const g5:string = document.getElementById('g5').innerHTML

        const h1:string = document.getElementById('h1').innerHTML
        const h2:string = document.getElementById('h2').innerHTML
        const h3:string = document.getElementById('h3').innerHTML
        const h4:string = document.getElementById('h4').innerHTML
        const h5:string = document.getElementById('h5').innerHTML
        const h6:string = document.getElementById('h6').innerHTML

        const i1:string = document.getElementById('i1').innerHTML
        const i2:string = document.getElementById('i2').innerHTML
        const i3:string = document.getElementById('i3').innerHTML
        const i4:string = document.getElementById('i4').innerHTML
        const i5:string = document.getElementById('i5').innerHTML


        if (
            (a1 === '7') && (a2 === '9') && (a3 === '8') && (a4 === '2') && (a5 === '3') 
            && (b1 === '3') && (b2 === '5') && (b3 === '7') && (b4 === '6') 
            && (c1 === '1') && (c2 === '3') && (c3 === '7') && (c4 === '9')
            && (d1 === '3') && (d2 === '7') && (d3 === '1') && (d4 === '6') && (d5 === '5')
            && (e1 === '8') && (e2 === '4')  && (e3 === '5') && (e4 === '2') && (e5 === '7')
            && (f1 === '7') && (f2 === '9') 
            && (g1 === '6') && (g2 === '4') && (g3 === '5') && (g4 === '7') && (g5 === '9')
            && (h1 === '1') && (h2 === '6') && (h3 === '3') && (h4 === '8') && (h5 === '2') && (h6 === '4')
            && (i1 === '4') && (i2 === '9') && (i3 === '7') && (i4 === '6') && (i5 === '3')
        ){
            const schmekle:HTMLElement = document.querySelector('.sudoku-board')
            schmekle.style.display = 'none'

            const schlepper:HTMLElement = document.querySelector('.winning-container')
            schlepper.style.display = 'grid'
        }
    }

    const puzzleFourArray: string[] = ["a1","a2","a3","a4","a5","b1","b2","b3","b4","c1",'c2',"c3",'c4','d1','d2','d3','d4','d5','e1','e2','e3','e4','e5','f1','f2','g1','g2','g3','g4','g5','h1','h2','h3','h4','h5','h6','i1','i2','i3','i4','i5']
    React.useEffect(() => {
        setTimeout(() => {
            GetLocalStorage()
        }, 0);
    },[])

    //getting localstorage variables for the puzzle cells.
    //localstorage must not read null nor '0'.
    const GetLocalStorage: () => void = () => {
        for (let i: number = 0; i < puzzleFourArray.length; i++){
            if(localStorage.getItem(`4${puzzleFourArray[i]}`) !== (null || '0')){

                let loadedCell: HTMLElement = document.getElementById(`${puzzleFourArray[i]}`)

                loadedCell.innerHTML = localStorage.getItem(`4${puzzleFourArray[i]}`);

                loadedCell.style.display = 'flex'
                loadedCell.style.color = 'rgb(56, 174, 244)'
            }
        }
    }

    return(
    <div className='main-container'>
        <div className='nav'>

        <NavLink
            activeClassName='active'
            to='/p3'>
            <span className='arrows'>&#11013;</span>
        </NavLink>

        <h1><a href={Solution} target='_blank' title='Solution'>Puzzle #4</a></h1>
        
        <NavLink
            activeClassName='active'
            to='/p5'>
            <span className='arrows'>&#10145;</span>
        </NavLink>

        </div>

        <div className='sudoku-board'>
            <div className='sudoku-subboard'>
                <span>5</span>
                <span>6</span>
                <span className='hoverable'
                style={{ color: 'rgba(0,0,0,0)' }}
                onClick={ev => Increment(ev.target)}
                id='a1'>0</span>
                <span className='hoverable'
                style={{ color: 'rgba(0,0,0,0)' }}
                onClick={ev => Increment(ev.target)}
                id='a2'>0</span>
                <span>4</span>
                <span className='hoverable'
                style={{ color: 'rgba(0,0,0,0)' }}
                onClick={ev => Increment(ev.target)}
                id='a3'>0</span>
                <span className='hoverable'
                style={{ color: 'rgba(0,0,0,0)' }}
                onClick={ev => Increment(ev.target)}
                id='a4'>0</span>
                <span className='hoverable'
                style={{ color: 'rgba(0,0,0,0)' }}
                onClick={ev => Increment(ev.target)}
                id='a5'>0</span>
                <span>1</span>
            </div>
            <div className='sudoku-subboard'>
                <span>4</span>
                <span>9</span>
                <span>8</span>
                <span>1</span>
                <span className='hoverable'
                style={{ color: 'rgba(0,0,0,0)' }}
                onClick={ev => Increment(ev.target)}
                id='b1'>0</span>
                <span>2</span>
                <span className='hoverable'
                style={{ color: 'rgba(0,0,0,0)' }}
                onClick={ev => Increment(ev.target)}
                id='b2'>0</span>
                <span className='hoverable'
                style={{ color: 'rgba(0,0,0,0)' }}
                onClick={ev => Increment(ev.target)}
                id='b3'>0</span>
                <span className='hoverable'
                style={{ color: 'rgba(0,0,0,0)' }}
                onClick={ev => Increment(ev.target)}
                id='b4'>0</span>
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
                <span>2</span>
                <span>6</span>
                <span>5</span>
                <span className='hoverable'
                style={{ color: 'rgba(0,0,0,0)' }}
                onClick={ev => Increment(ev.target)}
                id='c3'>0</span>
                <span className='hoverable'
                style={{ color: 'rgba(0,0,0,0)' }}
                onClick={ev => Increment(ev.target)}
                id='c4'>0</span>
                <span>8</span>
                <span>4</span>
            </div>
            <div className='sudoku-subboard'>
                <span className='hoverable'
                style={{ color: 'rgba(0,0,0,0)' }}
                onClick={ev => Increment(ev.target)}
                id='d1'>0</span>
                <span className='hoverable'
                style={{ color: 'rgba(0,0,0,0)' }}
                onClick={ev => Increment(ev.target)}
                id='d2'>0</span>
                <span>4</span>
                <span className='hoverable'
                style={{ color: 'rgba(0,0,0,0)' }}
                onClick={ev => Increment(ev.target)}
                id='d3'>0</span>
                <span>2</span>
                <span className='hoverable'
                style={{ color: 'rgba(0,0,0,0)' }}
                onClick={ev => Increment(ev.target)}
                id='d4'>0</span>
                <span>8</span>
                <span>9</span>
                <span className='hoverable'
                style={{ color: 'rgba(0,0,0,0)' }}
                onClick={ev => Increment(ev.target)}
                id='d5'>0</span>
            </div>
            <div className='sudoku-subboard'>
                <span>6</span>
                <span className='hoverable'
                style={{ color: 'rgba(0,0,0,0)' }}
                onClick={ev => Increment(ev.target)}
                id='e1'>0</span>
                <span>9</span>
                <span>3</span>
                <span className='hoverable'
                style={{ color: 'rgba(0,0,0,0)' }}
                onClick={ev => Increment(ev.target)}
                id='e2'>0</span>
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
            </div>
            <div className='sudoku-subboard'>
                <span>2</span>
                <span>1</span>
                <span>5</span>
                <span className='hoverable'
                style={{ color: 'rgba(0,0,0,0)' }}
                onClick={ev => Increment(ev.target)}
                id='f1'>0</span>
                <span className='hoverable'
                style={{ color: 'rgba(0,0,0,0)' }}
                onClick={ev => Increment(ev.target)}
                id='f2'>0</span>
                <span>8</span>
                <span>3</span>
                <span>4</span>
                <span>6</span>
            </div>
            <div className='sudoku-subboard'>
                <span className='hoverable'
                style={{ color: 'rgba(0,0,0,0)' }}
                onClick={ev => Increment(ev.target)}
                id='g1'>0</span>
                <span>8</span>
                <span>3</span>
                <span className='hoverable'
                style={{ color: 'rgba(0,0,0,0)' }}
                onClick={ev => Increment(ev.target)}
                id='g2'>0</span>
                <span className='hoverable'
                style={{ color: 'rgba(0,0,0,0)' }}
                onClick={ev => Increment(ev.target)}
                id='g3'>0</span>
                <span>2</span>
                <span className='hoverable'
                style={{ color: 'rgba(0,0,0,0)' }}
                onClick={ev => Increment(ev.target)}
                id='g4'>0</span>
                <span>1</span>
                <span className='hoverable'
                style={{ color: 'rgba(0,0,0,0)' }}
                onClick={ev => Increment(ev.target)}
                id='g5'>0</span>
            </div>
            <div className='sudoku-subboard'>
                <span>7</span>
                <span>5</span>
                <span className='hoverable'
                style={{ color: 'rgba(0,0,0,0)' }}
                onClick={ev => Increment(ev.target)}
                id='h1'>0</span>
                <span>9</span>
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
                <span className='hoverable'
                style={{ color: 'rgba(0,0,0,0)' }}
                onClick={ev => Increment(ev.target)}
                id='h6'>0</span>
            </div>
            <div className='sudoku-subboard'>
                <span className='hoverable'
                style={{ color: 'rgba(0,0,0,0)' }}
                onClick={ev => Increment(ev.target)}
                id='i1'>0</span>
                <span>2</span>
                <span className='hoverable'
                style={{ color: 'rgba(0,0,0,0)' }}
                onClick={ev => Increment(ev.target)}
                id='i2'>0</span>
                <span>8</span>
                <span className='hoverable'
                style={{ color: 'rgba(0,0,0,0)' }}
                onClick={ev => Increment(ev.target)}
                id='i3'>0</span>
                <span>1</span>
                <span>5</span>
                <span className='hoverable'
                style={{ color: 'rgba(0,0,0,0)' }}
                onClick={ev => Increment(ev.target)}
                id='i4'>0</span>
                <span className='hoverable'
                style={{ color: 'rgba(0,0,0,0)' }}
                onClick={ev => Increment(ev.target)}
                id='i5'>0</span>
            </div>
        </div>

        <div className='winning-container' style={{backgroundImage:`url(${WinningImage})`}}>
            <div></div>
            <h1>You Won!</h1>
            <NavLink
            activeClassName='active'
            to='/p5'>
                <h2 className='arrows'>
                    Play Another? &#10145;
                </h2>
            </NavLink>
            <div></div>
        </div>
    </div>
    )
}

export default Puzzle4;