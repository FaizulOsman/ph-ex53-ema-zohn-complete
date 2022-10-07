import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./ReviewItem.css";

const ReviewItem = ({ product, handleRemoveItem }) => {
  const { id, name, shipping, price, quantity, img } = product;
  return (
    <div className="review-item">
      <img src={img} alt="" />
      <div className="review-details-container">
        <div className="review-details">
          <p>{name}</p>
          <p>
            <small>Price: ${price}</small>
          </p>
          <p>
            <small>Shipping: ${shipping}</small>
          </p>
          <p>
            <small>Quantity: {quantity}</small>
          </p>
        </div>
        <div onClick={() => handleRemoveItem(id)} className="delete-container">
          <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
