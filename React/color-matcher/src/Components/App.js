import Square from "./Square/Square";
import Textbox from "./Textbox/Textbox";
import {useState} from 'react'

function App() {
  const [colorVal, setColorVal] = useState('')
  return (
    <div className="App">
      <Square colorVal={colorVal} />
      <Textbox colorVal={colorVal} setColorVal={setColorVal}/>
    </div>
  ); 
}

export default App;
