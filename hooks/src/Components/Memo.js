import { useState, useMemo } from "react";

const fibonacci = (n) => {
    if (n <= 1){
        return 1
    }
    return fibonacci(n - 1) + fibonacci( n - 2)
}

const MemoComponent = () => {

    const [num, setNum] = useState(1)
    const [isBlue, setIsBlue] = useState(false)

    const fib = useMemo(() => fibonacci(num), [num])

    return(
        <div>
            <h1
            onClick={() => setIsBlue(!isBlue)}
            style={{color: isBlue ? "blue" : "orange"}}
            >useMemo Example</h1>
            <h2>
                Fibonacci of {num} is {fib} <br />
                <button onClick={() => setNum(num + 1)}>+</button> &nbsp;
                <button onClick={() => setNum(num - 1)}>-</button>
            </h2>
        </div>

    )
}
export default MemoComponent