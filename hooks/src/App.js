import './App.css';
import StateComponent from './Components/State';
import EffectComponent from './Components/Effect';
import ContextComponent from './Components/Context';
import RefComponent from './Components/Ref';
import ReducerComponent from './Components/Reducer';
import MemoComponent from './Components/Memo';
import CallbackComponent from './Components/Callback';
import LayoutEffectComponent from './Components/LayoutEffect';
import ImperativeHandleComponent from './Components/ImperativeHandle';


function App() {
  return (
    <div className="App">
     <h1>React Page Examples</h1>
     <div>
      <h2>State Example</h2>
          <StateComponent />
     </div>
     <div>
      <h2>Effect Example</h2>
        <EffectComponent />
     </div>
     <div>
        <h2>Context Example</h2>
          <ContextComponent />
     </div>
     <div>
        <h2>Ref Example</h2>
          <RefComponent />
     </div>
     <div>
        <h2>Reducer Example</h2>
          <ReducerComponent />
     </div>
     <div>
        <h2>Memo Example</h2>
          <MemoComponent />
     </div>
     <div>
        <h2>CallBack Example</h2>
          <CallbackComponent />
     </div>
     <div>
        <h2>LayoutEffect Example (with useRef)</h2>
         <LayoutEffectComponent />
     </div>
     <div>
       <h2>ImperativeHandle Example</h2>
       <ImperativeHandleComponent />
     </div>
     
    </div>
  );
}

export default App;
