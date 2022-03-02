import { useState } from 'react'

function StateComponent(){

   const [ isPurple, setIsPurple ] = useState(false)

   return(
       <div
        onClick={() => setIsPurple(!isPurple)}
        style={{color: isPurple ? "purple" : "green"}}
       >
           <h1>Change State Color</h1>
       </div>
   )


}
export default StateComponent