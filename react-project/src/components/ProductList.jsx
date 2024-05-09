import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios if you're using it

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch data from your backend API
    axios.get('Api/products')
      .then(response => {
        setProducts(response.data); // Assuming the response contains an array of products
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); // Empty dependency array to run the effect only once on component mount

  return (
    <div>
      {products.map((product, index) => (
        <ProductComponent key={index} data={product} />
      ))}
    </div>
  );
}

function ProductComponent({ data }) {
  // Render your product component here using 'data'
  return (
    <div>
      <h2>{data.title}</h2>
      <p>{data.price}</p>
      {/* Render other product details */}
    </div>
  );
}

export default ProductList;
