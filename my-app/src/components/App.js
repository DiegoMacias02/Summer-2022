import React from "react";
import CountButton from "./CountButton/CountButton";
import SearchBar from "./SearchBar/SearchBar";
const dentalProducts = [
  "tooth paste",
  "tooth brush",
  "mouth wash",
  "dental floss",
  "mouth guard",
]
function App() {
  return (
    <div>
      <SearchBar products={dentalProducts} />
      <SearchBar products={["bike rack",
        "shoelace",
        "tires",
        "mountain bike"]} />
    </div>
  );
}
export default App;
