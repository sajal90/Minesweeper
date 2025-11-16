import Block from "./Block.jsx";

const MainGrid = ({width, height}) => {
    const grid = Array(width).fill(null).map(() => Array(height).fill(0));
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
                        // console.log(rowIdx, colIdx)
                        <Block key={3*rowIdx + colIdx} covered={false} bomb={false} />
                    ))
                ))}
            </div>
        </div>

    )
}

export default MainGrid;