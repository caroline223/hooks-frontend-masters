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
               style={{color: color ? "gray" : "brown"}}
            >
                <label>Type Here To Capitalize or Lowercase </label> 
            </div>
            <input value={text} onChange={ChangeText} /> &nbsp; <br />
            <p style={{color: 'white'}}>{text.toUpperCase()}</p>
            <p style={{color: 'white'}}>{text.toLowerCase()}</p>
        </div>
    )

}
export default InputValue
