import { useState } from 'react'


function InputValue(){

    const [text, setText] = useState('')
    const [color, setColor] = useState(false)


    const ChangeText = (e) => {
        setText(e.target.value)
    }


    return(
        <div>
            <div
               onClick={() => setColor(!color)}
               style={{color: color ? "pink" : "red"}}
            >
                <label>Type Here To Capitalize </label> 
            </div>
            <input value={text} onChange={ChangeText} /> &nbsp; <br />
            <p>{text.toUpperCase()}</p>
            <p>{text.toLowerCase()}</p>
        </div>
    )

}
export default InputValue
