import { useState, useEffect, useDebugValue } from 'react'


const useIsRaining = () => {

    const [isRaining, setIsRaining] = useState(false)

    useEffect(() => {
        setIsRaining(Math.random() > 0.5)
    })

    useDebugValue(isRaining ? "Is Raining" : "Is Not Raining")

    return isRaining;
}

const DebugValueComponent = () => {

    const isRaining = useIsRaining()


    return(
        <div>
            <h2>Do You Need A Coat Today? {isRaining ? "yes" : "no"} </h2>
        </div>
    )


}
export default DebugValueComponent
