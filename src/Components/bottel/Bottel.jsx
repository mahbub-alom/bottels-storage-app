import React from "react";
import "./bottel.css";

const Bottel = ({ bottel ,handleAddToCart}) => {
  const { img, name, price, quantity } = bottel;
  return (
    <div className="single-bottel">
      <h3>Name: {name}</h3>
      <img src={img} alt="" /><br />
      <button onClick={()=>handleAddToCart(bottel)}>Add to Cart</button>
    </div>
  );
};

export default Bottel;
