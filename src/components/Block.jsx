import { useState } from "react"

const Block = ({covered, bomb, handleClick, rowIdx, colIdx, val}) => {
    const [hover, setHover] = useState(false)

    const style = {
        backgroundColor: !covered&&!bomb ? "#484848ff" : hover ? "#9cfb03ff" : "white",
        width: "55px",
        height: "55px",
        borderRadius: "10px",
        border: "1px solid black",
        color: "#f20000ff",
        fontWeight: "bold",
        fontSize: "40px",
    }

    if(!covered && !bomb && val) {
        return (
            <div>
                <button onMouseOver={()=>setHover(true)}  onMouseLeave={() => setHover(false)}
                    style={style} type="button" onClick={() => handleClick(rowIdx, colIdx)}>
                    {val}
                </button>
            </div>
        )
    }
    return (
        <div>
            <button onMouseOver={()=>setHover(true)} onMouseLeave={() => setHover(false)}
             style={style} type="button" onClick={() => handleClick(rowIdx, colIdx)}></button>
        </div>
    )
}

export default Block;