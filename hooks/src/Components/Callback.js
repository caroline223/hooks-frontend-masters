import { useState, useEffect, useCallback, memo } from 'react'





const CallbackComponent = () => {

    const [time, setTime ] = useState(new Date());
    const [count, setCount ] = useState(0)

    useEffect(() => {
       const timer = setTimeout(() => setTime(new Date()), 1000);
       return () => clearTimeout(timer)
    }, [])


    const fibonacci = (n) => {
       if (n <= 1){
           return 1
       }
       return fibonacci(n - 1) + fibonacci(n - 2)
    }

    return(
        <div>
            <button onClick={() => setCount(count + 1)}>Current Count: {count}</button>
           
        </div>
    )

}

export default CallbackComponent