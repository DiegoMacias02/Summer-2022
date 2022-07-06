import React, {useState} from 'react'
import './SearchBar.css'

function SearchBar(props) {
    
    const [searchVal, setSearchVal] = useState("the search value")
                    
    const disBtn = searchVal.length > 0
    const handleInputChange = (event) => {
        setSearchVal(event.target.value)
    }
    const handleClearBtn = (event) => {
        setSearchVal("")
    }
    const filterProducts = props.products.filter((product) => {
        return product.includes(searchVal)
    })
    return (
      <div>
        <input type="text" value={searchVal} onChange={handleInputChange} />
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