import { useState } from "react";
import MainGrid from "./MainGrid";
const Minesweeper = () => {
    const [width, setWidth] = useState(50);
    const [height, setHeight] = useState(50);
    
    const handleClick = (difficulty) => {
        if(difficulty === "Easy") {
            setHeight(50);
            setWidth(50);
        } else if(difficulty === "Medium") {
            setHeight(100);
            setWidth(100);
        } else {
            setHeight(200);
            setWidth(200);
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