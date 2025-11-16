const Block = ({covered, bomb}) => {
    const style = {
        color: "white",
        backgroundColor: "white",
        width: "30px",
        height: "30px",
        borderRadius: "8px",
        border: "1px solid black",
        padding: "0.6em 1.2em",
    }

    const handleClick = () => {
        if(!covered) return;
       // if(covered && bomb) 
            // show game over
        // else
            // uncover current and neighbouring if possible
    }

    return (
        <div>
            <button style={style} type="button" onClick={handleClick}></button>
        </div>
    )
}

export default Block;