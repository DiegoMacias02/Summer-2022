import React from "react";
import CountButton from "./CountButton";
function App() {
  return (
    <div>
      <CountButton incrementBy={1} />
      <CountButton incrementBy={5} />
    </div>
  );
}
export default App;
