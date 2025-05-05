import React from 'react';
import './Products.css'; 
import Product from '../Product/Product';

const Products = (props) => {
  const products = props.ProductsData;

  return (
    <div className="cards-container">
      {/* {products.map((product) => (
        <div className="card" key={product.id}>
          <img src={product.thumbnail} alt={product.title} className="thumbnail" />
          <h2>{product.id}</h2>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <p>{product.price}</p>
          <button>ViewDetails</button>
        </div>
      ))} */}
      {
        products.map((x)=>{
          return(
            <>
            <Product singleProduct={x}/>
            </>
          )
        })
      }
    </div>
  );
};

export default Products;
