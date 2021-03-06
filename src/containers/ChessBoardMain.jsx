import React, { useState } from 'react';
import './chess-board-main.css';
import { isItSafe } from './chess-board-main-helper';
const intialMatrix = [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]];
const intialMatrix2 = [[0, 0, 0,     0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]];
/* const intial4SizeMatrix= [ [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ] ];
const intial4SizeMatrix2= [ [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ] ]; */
const Cross = () => {
    return <span className="cross">&#10006;</span>
}
const Circle = () => {
    return <div className="circle" />
}
const BoardRow = ({ i, j, bgColor, handleClick, matrix, crossMatrix }) => {

    return <div key={`${i},${j}`}
        style={{ backgroundColor: bgColor, height: '100%', width: '100%' }}
        onClick={() => handleClick(i, j)}
    >
        {matrix[i][j] ? <Circle /> : null}
        {crossMatrix[i][j] ? <Cross /> : null}
    </div>
}
const ChessBoardMain = () => {
    const [matrix, setMatrix] = useState([...intialMatrix]);
    const [crossMatrix, setCrossMatrix] = useState([...intialMatrix2]);
    const [count,setCount]=useState(0);
    const handleClick = (i, j) => {
        const mt = [...matrix];
        let x = isItSafe(i, j, matrix)
        console.log(x);
        if (x) {
            mt[i][j] = 1;
            setMatrix(mt);
            setCount(count+1);
        } else {
            const cm = [...crossMatrix];
            console.log("cm", cm);
            cm[i][j] = 1;
            setTimeout(() => {
                const cm = [...crossMatrix];
                cm[i][j] = 0;
                setCrossMatrix(cm);
            }, 2000);

            setCrossMatrix(cm);
        }
    }
    const getMatrix = () => {
        let arr = [];
        const finalarr = [];
        for (let i = 0; i < matrix.length; i++) {
            let start = 'black';
            let end = 'white';
            for (let j = 0; j < matrix[0].length; j++) {
                if ((i + j) % 2 === 0) {
                    arr.push(<BoardRow key={`${i},${j}`}
                        bgColor={start}
                        handleClick={handleClick}
                        matrix={matrix}
                        crossMatrix={crossMatrix}
                        i={i}
                        j={j}
                    />)
                }
                else {
                    arr.push(<BoardRow key={`${i}+${j}`}
                        bgColor={end}
                        handleClick={handleClick}
                        matrix={matrix}
                        crossMatrix={crossMatrix}
                        i={i}
                        j={j}
                    />)
                }
            }
            finalarr.push(<div className={'column-class'}>{arr}</div>)
            arr = [];
        }
        return finalarr;
    }
    return (
        <>
        <h1 style={{textAlign:"center"}}><u>Responsive ChessBoard</u></h1>
        {count === 2 ? <h2 style={{color:"blue",textAlign:"center"}}>Queens Places successfully</h2> : <h2 style={{color:"blue",textAlign:"center"}}> In this game you have to place two queens such that their path do not cross each other</h2>}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
         <div className={"chess-cont"}>
            {getMatrix()}
         </div>
        </div>
       
        </>
    );
};

export default ChessBoardMain;