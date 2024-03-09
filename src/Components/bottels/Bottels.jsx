import React, { useEffect, useState } from "react";
import Bottel from "../bottel/Bottel";
import "./bottels.css";
import { addToLS, getOldData, removeFromLS } from "../../utilites/localStorage";
import Cart from "../Cart/Cart";

const Bottels = () => {
  const [bottles, setBottels] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("bottol.json")
      .then((res) => res.json())
      .then((data) => setBottels(data));
  }, []);

  useEffect(() => {
    if (bottles.length > 0) {
      const storedCart = getOldData();
      let savedCart = [];
      for (const id of storedCart) {
        const bottle = bottles.find((bottle) => bottle.id == id);
        if (bottle) {
          savedCart.push(bottle);
        }
      }
      setCart(savedCart)
    }
  }, [bottles]);

  const handleAddToCart = (bottel) => {
    const newCart = [...cart, bottel];
    setCart(newCart);
    addToLS(bottel.id);
  };

  const handleRemoveFromLs=(id)=>{
    const remaining=cart.filter(bottel=>bottel.id!==id)
    setCart(remaining)
    removeFromLS(id)
  }
  return (
    <div>
      <h2>Total Bottels: {bottles.length}</h2>
      <Cart cart={cart} handleRemoveFromLs={handleRemoveFromLs}></Cart>
      <div className="bottel">
        {bottles.map((bottel) => (
          <Bottel
            key={bottel.id}
            bottel={bottel}
            handleAddToCart={handleAddToCart}
          ></Bottel>
        ))}
      </div>
    </div>
  );
};

export default Bottels;
