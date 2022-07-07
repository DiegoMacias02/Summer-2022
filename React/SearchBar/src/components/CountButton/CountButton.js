import { useState, useEffect  } from "react"
import "./CountButton.css"

function CountButton(props) {
    //*this creates an object and just holds shit in it object called props
    console.log(props.incrementBy)

    const [currentCount, setCurrentCount] = useState(0)

    // const buttonStyle = { 
    //     background: props.buttonColor,
    //     borderRadius: props.borderRadius
    // }
    //this function is called once the component is loaded up onto the screen
    //!Basically function(param1)is called on the event on param2 is in the array
    useEffect(() => {
        console.log("called when current component 'mounts' or current count is updated")
    },[/*currentCount*/])
    const handleClick = () => {
        setCurrentCount(currentCount+ props.incrementBy)
    }
    return (
    <div>
        <button onClick={handleClick}> + {props.incrementBy}</button>
        <div className="count-display">{currentCount}</div>  
    </div>
    )
}
export default CountButton