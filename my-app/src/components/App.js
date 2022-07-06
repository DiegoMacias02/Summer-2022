import React from "react";
import CountButton from "./CountButton";
function App() {
  return (
    <div>
          <CountButton incrementBy={1} buttonColor={'blue'} />
      <CountButton incrementBy={5} buttonColor={'orange'} />
    </div>
  );
}
export default App;
