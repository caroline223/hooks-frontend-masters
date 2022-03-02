import { useReducer } from 'react'


const limitRGB = (num) => (num < 0 ? 0 : num > 255 ? 255 : num);
//to ensure that the RBG values are between 0 and 255 inclusive

const step = 50;

const reducer = (state, action) => {
    switch (action.type){
        case "INCREMENT_R":
            return Object.assign({}, state, { r: limitRGB(state.r + step) });
        case "DECREMENT_R":
             return Object.assign({}, state, { r: limitRGB(state.r - step) });
         case "INCREMENT_G":
            return Object.assign({}, state, { g: limitRGB(state.g + step) });
        case "DECREMENT_G":
            return Object.assign({}, state, { g: limitRGB(state.g - step) });
        case "INCREMENT_B":
             return Object.assign({}, state, { b: limitRGB(state.b + step) });
        case "DECREMENT_B":
            return Object.assign({}, state, { b: limitRGB(state.b - step) });
        default:
            return state;
    }

}

const ReducerComponent = () => {

   const [{ r, g, b }, dispatch] = useReducer(reducer, { r: 0, g: 0, b: 0});

    return(
        <div>
            <h1 style={{ color: `rgb(${r}, ${g}, ${b})`}}>useReducer Example</h1>
        <div>
            <span>r</span>
            <button onClick={() => dispatch({ type: "INCREMENT_R" })}>+</button>&nbsp;
            <button onClick={() => dispatch({ type: "DECREMENT_R" })}>-</button>
        </div>
        <div>
            <span>g</span>
            <button onClick={() => dispatch({ type: "INCREMENT_G"})}>+</button>&nbsp;
            <button onClick={() => dispatch({ type: "DECREMENT_G"})}>-</button>
        </div>
        <div>
            <span>b</span>
            <button onClick={() => dispatch({ type: "INCREMENT_B"})}>+</button>&nbsp;
            <button onClick={() => dispatch({ type: "DECREMENT_B"})}>-</button>
        </div>
        </div>
    )
}
export default ReducerComponent;