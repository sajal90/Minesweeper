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
        let count = 0, totalBombs = width;
        while (count < totalBombs) {
            let a = Math.floor(Math.random() * width);
            let b = Math.floor(Math.random() * height);
            if(initial[b][a] === blockStates.BOMB) continue;
            initial[b][a] = blockStates.BOMB;
            
            count++;
        }
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setGrid(initial);
 
    }, [width, height])
    
    
    const handleClick = (rowIdx, colIdx) => {
        if(grid[rowIdx][colIdx] === blockStates.UNCOVERED) return;
        if(grid[rowIdx][colIdx] === blockStates.BOMB) {
            // add gameover window
            console.log("Game over!");
            return;
        }
        let newGrid = [...grid];
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
                        // console.log(col)
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