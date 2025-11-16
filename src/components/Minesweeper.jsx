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
            setHeight(12);
            setWidth(15);
        } else {
            setHeight(12);
            setWidth(20);
        }
    }

    return (
        <div>
            <h1>Minesweeper</h1>
            <div>
                <button className="diff-button" type="button" onClick={() => handleClick("Easy")}>Easy</button>
                <button className="diff-button" type="button" onClick={() => handleClick("Medium")}>Medium</button>
                <button className="diff-button" type="button" onClick={() => handleClick("Hard")}>Hard</button>
            </div>
            <br></br>
            <MainGrid width={width} height={height}></MainGrid>
        </div>
    )
}
export default Minesweeper;