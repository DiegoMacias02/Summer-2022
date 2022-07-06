import React from "react";
import CountButton from "./CountButton/CountButton";
function App() {
  return (
    <div>
          <CountButton incrementBy={1} buttonColor={'blue'} borderRadius={'1px'} />
          <CountButton incrementBy={5} buttonColor={'orange'} borderRadius={'200px'} />
    </div>
  );
}
export default App;
