import { useState } from 'react';

function SearchBar (props) {

    const [word, setWord] = useState('');
    const [inStock, setInStock] = useState(false)

    const handleSearch = e => {
        setWord(e.target.value);
        props.setProducts(e.target.value);
    }

    const handleStock = (e) => {
        setInStock(e.target.checked);
        const filteredProducts = props.products.filter((product) => {
            const searchInStock = product.name.toLowerCase().includes(inStock.toLowerCase())
            const checkBox = !e.target.checked || product.inStock;
    
            return searchInStock && checkBox
        });
        props.setFilteredProducts(filteredProducts);
    }

    return (
        <>
            <label>Search</label><br/>
            <input name='search' value={word} type='text' onChange={handleSearch} /><br/><br/>
            <input type='checkbox' checked={inStock} onChange={handleStock} />
            <label>Only Show Products in Stock</label>
        </>
    )
}


export default SearchBar;