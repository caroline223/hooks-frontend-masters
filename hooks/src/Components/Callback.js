import { useState, useEffect, useCallback, memo } from 'react'


const ExpensiveComputationalComponent = memo(({compute, count}) => {
    return(
        <div>
            <h1>Computed: {compute(count)}</h1>
            <h4>Last Re-Render: {new Date().toLocaleTimeString()} </h4>
        </div>
    )
})


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
            <button onClick={() => setCount(count + 1)}>Current Count: {count}</button> &nbsp;
            <button onClick={() => setCount(count - 1)}>Previous Count: {count - 1}</button>
            <ExpensiveComputationalComponent 
                compute={useCallback(fibonacci, [])}
                //takes a function and dependency and gives back the function every single re-render
                count={count}
            />
           
        </div>
    )

}

export default CallbackComponent