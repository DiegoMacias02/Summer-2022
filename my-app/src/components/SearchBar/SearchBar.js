import React, {useState} from 'react'
import './SearchBar.css'

function SearchBar() {
    
    const [searchVal, setSearchVal] = useState("the search value")
    const products =["tooth paste",
                    "tooth brush",
                    "mouth wash",
                    "dental floss",
                    "mouth guard"]
                    
    const disBtn = searchVal.length > 0
    const handleInputChange = (event) => {
        setSearchVal(event.target.value)
    }
    const handleClearBtn = (event) => {
        setSearchVal("")
    }
    const filterProducts = products.filter((product) => {
        return product.includes(searchVal)
    })
    return (
      <div>
        <input typ e="text" value={searchVal} onChange={handleInputChange} />
        {disBtn && <button onClick={handleClearBtn}>Clear</button>}
        <ul>
          {filterProducts.map((product) => {
            return <li key={product}> {product}</li>;
          })}
        </ul>
      </div>
    );
}

export default SearchBar