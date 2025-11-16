const Block = ({covered, bomb, handleClick, rowIdx, colIdx, val}) => {
    const style = {
        backgroundColor: !covered&&!bomb ? "#484848ff" : "white",
        width: "55px",
        height: "55px",
        borderRadius: "10px",
        border: "1px solid black",
        color: "#f20000ff",
        fontWeight: "bold",
        fontSize: "40px"
    }

    if(!covered && !bomb && val) {
        return (
            <div>
                <button style={style} type="button" onClick={() => handleClick(rowIdx, colIdx)}>
                    {val}
                </button>
            </div>
        )
    }
    return (
        <div>
            <button style={style} type="button" onClick={() => handleClick(rowIdx, colIdx)}></button>
        </div>
    )
}

export default Block;