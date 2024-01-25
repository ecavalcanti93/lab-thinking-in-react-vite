import { useState } from 'react';
import SearchBar from './SearchBar';
import jsonData from '../data.json';
import ProductTable from './ProductTable';


function ProductsPage() {
  const [products, setProducts] = useState(jsonData);

  const searchProduct = (char) => {
    let filteredProducts;

    if (char === "") {
        filteredProducts = jsonData;
    } else {
        filteredProducts = jsonData.filter ((eachProduct) => {
            return eachProduct.name.toLocaleLowerCase().includes(char.toLocaleLowerCase())
        })
    }
    setProducts(filteredProducts);
  }

    return (
    <div>
      <h1>IronStore</h1>
      <SearchBar setProducts={searchProduct} />
      <ProductTable products={products} setProducts={setProducts} />
    </div>
  );
}

export default ProductsPage;