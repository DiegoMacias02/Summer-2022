import { useState } from "react"
import "./CountButton.css"

function CountButton(props) {
    //this creates an object and just holds shit in it object called props
    console.log(props.incrementBy)

    const [currentCount, setCurrentCount] = useState(0)

    const buttonStyle = { 
        background: props.buttonColor,
        borderRadius: props.borderRadius
    }

    const handleClick = () => {
        setCurrentCount(currentCount+ props.incrementBy)
    }
    return (
    <div>
        <button style={buttonStyle} onClick={handleClick}> + {props.incrementBy}</button>
        <div className="count-display">{currentCount}</div>  
    </div>
    )
}
export default CountButton