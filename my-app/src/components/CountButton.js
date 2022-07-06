import { useState } from "react"

function CountButton(props) {
    //this creates an object and just holds shit in it object called props
    console.log(props.incrementBy)

    const [currentCount, setCurrentCount] = useState(0)

    const buttonStyle = { 
        background: props.buttonColor,
        borderRadius: "10px"

    }

    const handleClick = () => {
        setCurrentCount(currentCount+ props.incrementBy)
    }
    return (
    <div>
        <button style={buttonStyle} onClick={handleClick}> + {props.incrementBy}</button>
        <div>{currentCount}</div>  
    </div>
    )
}
export default CountButton