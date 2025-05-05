import React from 'react';
import './Product.css'; 
import { Link } from 'react-router-dom';

const Product = ({ singleProduct }) => {
  return (
    <div className="single-card">
      <img src={singleProduct.thumbnail} alt={singleProduct.title} className="single-thumbnail" />
      <h1>{singleProduct.title}</h1>
      <p>${singleProduct.price}</p>
      <p>{singleProduct.description}</p>
      <Link to={`/products/product/${singleProduct.id}`} className="details-link">
        View Details
      </Link>
    </div>
  );
};

export default Product;
