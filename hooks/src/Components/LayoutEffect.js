import { useState, useLayoutEffect, useRef } from 'react'


function LayoutEffectComponent() {

    const [width, setWidth ] = useState(0);
    const [height, setHeight] = useState(0);
    const el = useRef();


    useLayoutEffect(() => {
        setHeight(el.current.clientHeight);
        setWidth(el.current.clientWidth);
    }, [])

    return(
        <div>
            <h2>TextArea Width: {width}px</h2>
            <h2>TextArea Height: {height}px</h2>
            <textarea 
                onClick={() => {
                    setWidth(0)
                }}
                ref={el}
            />
        </div>
    )

}

export default LayoutEffectComponent