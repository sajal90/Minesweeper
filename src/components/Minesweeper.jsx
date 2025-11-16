import { useState } from "react";
import MainGrid from "./MainGrid.jsx";
const Minesweeper = () => {
    const [width, setWidth] = useState(10);
    const [height, setHeight] = useState(10);
    
    const handleClick = (difficulty) => {
        if(difficulty === "Easy") {
            setHeight(10);
            setWidth(10);
        } else if(difficulty === "Medium") {
            setHeight(15);
            setWidth(15);
        } else {
            setHeight(20);
            setWidth(20);
        }
    }

    return (
        <div>
            <h2>Minesweeper</h2>
            <div>
                <button type="button" onClick={() => handleClick("Easy")}>Easy</button>
                <button type="button" onClick={() => handleClick("Medium")}>Medium</button>
                <button type="button" onClick={() => handleClick("Hard")}>Hard</button>
            </div>
            <MainGrid width={width} height={height}></MainGrid>
        </div>
    )
}
export default Minesweeper;