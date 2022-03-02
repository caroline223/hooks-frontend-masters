import './App.css';
import StateComponent from './Components/State';
import EffectComponent from './Components/Effect';
import ContextComponent from './Components/Context';
import RefComponent from './Components/Ref';

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
     
    </div>
  );
}

export default App;
