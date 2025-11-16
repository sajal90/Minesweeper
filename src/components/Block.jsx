const Block = ({covered, bomb, handleClick, rowIdx, colIdx}) => {
    const style = {
        backgroundColor: !covered&&!bomb ? "grey" : bomb ? "black" : "white" ,
        width: "30px",
        height: "30px",
        borderRadius: "8px",
        border: "1px solid black",
        padding: "0.6em 1.2em",
    }

    return (
        <div>
            <button style={style} type="button" onClick={() => handleClick(rowIdx, colIdx)}></button>
        </div>
    )
}

export default Block;