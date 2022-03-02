import { useState, useRef } from 'react'


const RefComponent = () => {

    const [stateNumber, setStateNumber] = useState(0)
    const numRef = useRef(0)

    function IncrementAndDelayLogging(){
        setStateNumber(stateNumber + 1)
        numRef.current++;

        setTimeout(() => 
            alert(`state: ${stateNumber}, ref: ${numRef.current}`),
            1500
        );
    }

    return (
        <div>
            <button onClick={IncrementAndDelayLogging}>  Delay Logging </button>
            <h4>State: {stateNumber}</h4>
            <h4>Ref: {numRef.current}</h4>
        </div>
    )

}
export default RefComponent
