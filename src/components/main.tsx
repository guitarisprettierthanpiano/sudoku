import * as React from 'react';
import { useEffect } from 'react';

//this is puzzle #2 from https://www.printablesudoku99.com/pdf/EasySudoku001.pdf
const Main: React.FC = () => {

    //this will cycle the clicked number between 0 and 9. if 0, it is hidden
    const Increment = (ev) => {
        ev.style.display = 'inline'
        const current_number = Math.round(ev.innerHTML)

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
        const a1 = document.getElementById('a1').innerHTML
        const a2 = document.getElementById('a2').innerHTML
        const a3 = document.getElementById('a3').innerHTML
        const a4 = document.getElementById('a4').innerHTML

        const b1 = document.getElementById('b1').innerHTML
        const b2 = document.getElementById('b2').innerHTML
        const b3 = document.getElementById('b3').innerHTML

        const c1 = document.getElementById('c1').innerHTML
        const c2 = document.getElementById('c2').innerHTML
        const c3 = document.getElementById('c3').innerHTML
        const c4 = document.getElementById('c4').innerHTML
        const c5 = document.getElementById('c5').innerHTML

        const d1 = document.getElementById('d1').innerHTML
        const d2 = document.getElementById('d2').innerHTML
        const d3 = document.getElementById('d3').innerHTML
        const d4 = document.getElementById('d4').innerHTML
        const d5 = document.getElementById('d5').innerHTML

        const e1 = document.getElementById('e1').innerHTML
        const e2 = document.getElementById('e2').innerHTML

        const f1 = document.getElementById('f1').innerHTML
        const f2 = document.getElementById('f2').innerHTML
        const f3 = document.getElementById('f3').innerHTML
        const f4 = document.getElementById('f4').innerHTML
        const f5 = document.getElementById('f5').innerHTML

        const g1 = document.getElementById('g1').innerHTML
        const g2 = document.getElementById('g2').innerHTML
        const g3 = document.getElementById('g3').innerHTML
        const g4 = document.getElementById('g4').innerHTML
        const g5 = document.getElementById('g5').innerHTML

        const h1 = document.getElementById('h1').innerHTML
        const h2 = document.getElementById('h2').innerHTML
        const h3 = document.getElementById('h3').innerHTML
        const h4 = document.getElementById('h4').innerHTML
        const h5 = document.getElementById('h5').innerHTML
        const h6 = document.getElementById('h6').innerHTML

        const i1 = document.getElementById('i1').innerHTML
        const i2 = document.getElementById('i2').innerHTML
        const i3 = document.getElementById('i3').innerHTML
        const i4 = document.getElementById('i4').innerHTML
        const i5 = document.getElementById('i5').innerHTML
        const i6 = document.getElementById('i6').innerHTML


        if (
            (a1 === '2') && (a2 === '8') && (a3 === '6') && (a4 === '9') 
            && (b1 === '6') && (b2 === '8') && (b3 === '7')
            && (c1 === '3') && (c2 === '9') && (c3 === '6') && (c4 === '4') && (c5 === '2')
            && (d1 === '2') && (d2 === '3') && (d3 === '9') && (d4 === '4') && (d5 === '7')
            && (e1 === '2') && (e2 === '3') 
            && (f1 === '9') && (f2 === '6') && (f3 === '5') && (f4 === '8') && (f5 === '1')
            && (g1 === '5') && (g2 === '8') && (g3 === '2') && (g4 === '1') && (g5 === '7')
            && (h1 === '3') && (h2 === '7') && (h3 === '8') && (h4 === '5') && (h5 === '2') && (h6 === '6')
            && (i1 === '2') && (i2 === '1') && (i3 === '4') && (i4 === '5') && (i5 === '8') && (i6 === '3')
        ){
            const schmekle:HTMLElement = document.querySelector('.main-container')
            schmekle.style.display = 'none'
        }
    }

    //want to make a right click decrement
    const Decrement = () => {
        const span_array = document.querySelectorAll('.hoverable')

        for (let i = 0; i < span_array.length; i++){
            span_array[i].addEventListener('contextmenu', e => RightClicked(e))
        }
    }
    function RightClicked(e){
        console.log('fvrfe')

        e.style.display = 'inline'
        const current_number = Math.round(e.innerHTML)

        e.style.color = 'rgba(255,0,0,1)'
        e.innerHTML = ((current_number - 1).toString())

        if (current_number < 1) {
            e.innerHTML = 9;

            e.style.color = 'rgba(0,0,0,0)'
        }

        //lets check if we won...
        DidYaWinSon()
    }
    useEffect(() => {
        addEventListener("contextmenu", function (e) {
            e.preventDefault();
        }, false);
        Decrement();
    }, [])

    return(

    <div className='main-container'>
        <div className='sudoku-board'>
            <div className='sudoku-subboard'>
                <span>1</span>
                <span className='hoverable'
                style={{ color: 'rgba(0,0,0,0)' }}
                onClick={ev => Increment(ev.target)}
                id='a1'>0</span>
                <span className='hoverable'
                style={{ color: 'rgba(0,0,0,0)' }}
                onClick={ev => Increment(ev.target)}
                id='a2'>0</span>
                <span>5</span>
                <span>7</span>
                <span>3</span>
                <span className='hoverable'
                style={{ color: 'rgba(0,0,0,0)' }}
                onClick={ev => Increment(ev.target)}
                id='a3'>0</span>
                <span>4</span>
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
                <span>4</span>
                <span>1</span>
                <span className='hoverable'
                style={{ color: 'rgba(0,0,0,0)' }}
                onClick={ev => Increment(ev.target)}
                id='b2'>0</span>
                <span>2</span>
                <span className='hoverable'
                style={{ color: 'rgba(0,0,0,0)' }}
                onClick={ev => Increment(ev.target)}
                id='b3'>0</span>
                <span>5</span>
                <span>3</span>
            </div>

            <div className='sudoku-subboard'>
                <span>7</span>
                <span className='hoverable'
                style={{ color: 'rgba(0,0,0,0)' }}
                onClick={ev => Increment(ev.target)}
                id='c1'>0</span>
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
                <span>1</span>
                <span className='hoverable'
                style={{ color: 'rgba(0,0,0,0)' }}
                onClick={ev => Increment(ev.target)}
                id='c5'>0</span>
                <span>8</span>
            </div>

            <div className='sudoku-subboard'>
                <span className='hoverable'
                style={{ color: 'rgba(0,0,0,0)' }}
                onClick={ev => Increment(ev.target)}
                id='d1'>0</span>
                <span>8</span>
                <span>1</span>
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
                <span>5</span>
                <span>6</span>
            </div>

            <div className='sudoku-subboard'>
                <span>5</span>
                <span>6</span>
                <span>7</span>
                <span>8</span>
                <span className='hoverable'
                style={{ color: 'rgba(0,0,0,0)' }}
                onClick={ev => Increment(ev.target)}
                id='e1'>0</span>
                <span>1</span>
                <span>4</span>
                <span className='hoverable'
                style={{ color: 'rgba(0,0,0,0)' }}
                onClick={ev => Increment(ev.target)}
                id='e2'>0</span>
                <span>9</span>
            </div>

            <div className='sudoku-subboard'>
                <span>3</span>
                <span>4</span>
                <span className='hoverable'
                style={{ color: 'rgba(0,0,0,0)' }}
                onClick={ev => Increment(ev.target)}
                id='f1'>0</span>
                <span className='hoverable'
                style={{ color: 'rgba(0,0,0,0)' }}
                onClick={ev => Increment(ev.target)}
                id='f2'>0</span>
                <span className='hoverable'
                style={{ color: 'rgba(0,0,0,0)' }}
                onClick={ev => Increment(ev.target)}
                id='f3'>0</span>
                <span>7</span>
                <span className='hoverable'
                style={{ color: 'rgba(0,0,0,0)' }}
                onClick={ev => Increment(ev.target)}
                id='f4'>0</span>
                <span className='hoverable'
                style={{ color: 'rgba(0,0,0,0)' }}
                onClick={ev => Increment(ev.target)}
                id='f5'>0</span>
                <span>2</span>
            </div>

            <div className='sudoku-subboard'>
                <span>4</span>
                <span>6</span>
                <span className='hoverable'
                style={{ color: 'rgba(0,0,0,0)' }}
                onClick={ev => Increment(ev.target)}
                id='g1'>0</span>
                <span className='hoverable'
                style={{ color: 'rgba(0,0,0,0)' }}
                onClick={ev => Increment(ev.target)}
                id='g2'>0</span>
                <span>3</span>
                <span className='hoverable'
                style={{ color: 'rgba(0,0,0,0)' }}
                onClick={ev => Increment(ev.target)}
                id='g3'>0</span>
                <span>9</span>
                <span className='hoverable'
                style={{ color: 'rgba(0,0,0,0)' }}
                onClick={ev => Increment(ev.target)}
                id='g4'>0</span>
                <span className='hoverable'
                style={{ color: 'rgba(0,0,0,0)' }}
                onClick={ev => Increment(ev.target)}
                id='g5'>0</span>
            </div>

            <div className='sudoku-subboard'>
                <span className='hoverable'
                style={{ color: 'rgba(0,0,0,0)' }}
                onClick={ev => Increment(ev.target)}
                id='h1'>0</span>
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
                <span className='hoverable'
                style={{ color: 'rgba(0,0,0,0)' }}
                onClick={ev => Increment(ev.target)}
                id='h5'>0</span>
                <span>4</span>
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
                <span>9</span>
                <span className='hoverable'
                style={{ color: 'rgba(0,0,0,0)' }}
                onClick={ev => Increment(ev.target)}
                id='i2'>0</span>
                <span className='hoverable'
                style={{ color: 'rgba(0,0,0,0)' }}
                onClick={ev => Increment(ev.target)}
                id='i3'>0</span>
                <span>7</span>
                <span>6</span>
                <span className='hoverable'
                style={{ color: 'rgba(0,0,0,0)' }}
                onClick={ev => Increment(ev.target)}
                id='i4'>0</span>
                <span className='hoverable'
                style={{ color: 'rgba(0,0,0,0)' }}
                onClick={ev => Increment(ev.target)}
                id='i5'>0</span>
                <span className='hoverable'
                style={{ color: 'rgba(0,0,0,0)' }}
                onClick={ev => Increment(ev.target)}
                id='i6'>0</span>
            </div>
        </div>
    </div>
    )
}

export default Main;