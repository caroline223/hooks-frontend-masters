import { useState, useEffect } from 'react'


function EffectComponent(){

    const [time, setTime] = useState(new Date())
    const [isRed, setIsRed] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => setTime(new Date()), 2000)
        return () => clearTimeout(timer); // equivalent to componentDidMount
    })


    return(
        <div>
            <h1
                onClick={() => setIsRed(!isRed)}
                style={{color: isRed ? "red" : "orange"}}
            >Use Effect Example</h1>
            <h1>Example: {time.toLocaleTimeString()}</h1>
            <h2>Example: {time.toLocaleDateString()}</h2>
        </div>
    )

}
export default EffectComponent;