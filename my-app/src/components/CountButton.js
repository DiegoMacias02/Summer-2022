import { useState } from "react"

function CountButton(props) {
    //this creates an object and just holds shit in it object called props
    console.log(props.incrementBy)
    const [currentCount, setCurrentCount] = useState(0)

    const handleClick = () => {
        setCurrentCount(currentCount+ props.incrementBy)
    }
    return (
    <div>
        <button onClick={handleClick}> +1</button>
        <div>{currentCount}</div>
    </div>
    )
}
export default CountButton