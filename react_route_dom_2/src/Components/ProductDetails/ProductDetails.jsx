import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../Products/PData';
import './ProductDetails.css'; // Import external CSS

const ProductDetails = () => {
  const { id } = useParams();
  const matchedData = data.products.find(x => x.id === Number(id));
  if(!matchedData){
    return(
      <>
      <h1>data not found</h1></>
    )
  }
  return (
    <div className="details-container">
      <div className="details-card">
        <img src={matchedData.thumbnail} alt={matchedData.title} className="details-thumbnail" />
        <h1>{matchedData.title}</h1>
        <p>Price: ${matchedData.price}</p>
        <p>stock:{matchedData.stock}</p>
        <p>Comments: {matchedData.comment || "No comments available."}</p>
        <p>Rating: ⭐ {matchedData.rating}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
