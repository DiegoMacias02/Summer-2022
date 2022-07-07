import React from "react";
import CountButton from "./CountButton/CountButton";
import SearchBar from "./SearchBar/SearchBar";
import { useState, useEffect } from "react";

//* Turnary syntax (false? "its true":"its false"
//*--> would print "its false" since its false*/
function App() {
  const [productsState, setProductsState] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((productsArray) => {
        const newProductsState = productsArray.map((productObj) => {
          return productObj.title;
        });
        setProductsState(newProductsState);
      });
  }, []);
  const hasProducts = productsState.length > 0;

  return (
    <div>
      {hasProducts ? <SearchBar products={productsState} /> : "Loading.."}
    </div>
  );
}
export default App;
