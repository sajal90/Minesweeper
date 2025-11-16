import { useEffect, useState } from "react";
import Block from "./Block.jsx";


const MainGrid = ({width, height}) => {
    const blockStates = {
        BOMB: "bomb",
        COVERED: "covered",
        UNCOVERED: "uncovered"
    }

    const [grid, setGrid] = useState(Array.from({length: height},()=> Array.from({length: width}, () => blockStates.COVERED)));
    
    useEffect(() => {
        const initial = Array.from({ length: height }, () => Array.from({ length: width }, () => blockStates.COVERED))
        let count = 0, totalBombs = width + height;
        while (count < totalBombs) {
            let a = Math.floor(Math.random() * width);
            let b = Math.floor(Math.random() * height);
            if(initial[b][a] === blockStates.BOMB) continue;
            initial[b][a] = blockStates.BOMB;
            
            count++;
        }
        setGrid(initial);
    }, [width, height])

     const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1],
                    [-1, -1], [-1, 1], [1, -1], [1, 1]];

    const countBombNear = (i, j) =>{
        let c = 0;

        dirs.forEach(d => {
            let dx = i+d[0];
            let dy = j+d[1];
            if(dx >= 0 && dx < height && dy >= 0 && dy < width) {
                if(grid[dx][dy] === blockStates.BOMB) c++;
            }
        })
        return c;
    }

    const getNewGrid = (newGrid, i, j) => {
        if(countBombNear(i, j) > 0) {
            return;
        }

        dirs.forEach(d => {
            let dx = i+d[0];
            let dy = j+d[1];
            if(dx >= 0 && dx < height && dy >= 0 && dy < width) {
                if(newGrid[dx][dy] === blockStates.COVERED) {
                    newGrid[dx][dy] = blockStates.UNCOVERED;
                    getNewGrid(newGrid, dx, dy);
                }
            }
        })
    }
    
    
    const handleClick = (rowIdx, colIdx) => {
        if(grid[rowIdx][colIdx] === blockStates.UNCOVERED) return;
        if(grid[rowIdx][colIdx] === blockStates.BOMB) {
            // add gameover window
            console.log("Game over!");
            return;
        }
        console.log(countBombNear(rowIdx, colIdx))
        let newGrid = grid.map(row => [...row])
        getNewGrid(newGrid, rowIdx, colIdx);
        newGrid[rowIdx][colIdx] = blockStates.UNCOVERED;
        setGrid(newGrid);
    }

    const style = {
        display: "grid",
        gridTemplateColumns: `repeat(${width}, 1fr)`,
        gap: "1px",
    }; 
    
    return (
        <div>
            {width} and {height}
            <div style={style}>
                {grid.map((row, rowIdx) => (
                    row.map((col,colIdx) => (
                        <Block key={3*rowIdx + colIdx} 
                            covered={col==="covered"} bomb={col==="bomb"} handleClick={handleClick}
                            rowIdx={rowIdx} colIdx={colIdx}
                        />
                    ))
                ))}
            </div> </div>

    )
}

export default MainGrid;