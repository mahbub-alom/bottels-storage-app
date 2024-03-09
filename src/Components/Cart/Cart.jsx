import React from 'react';
import "./cart.css"

const Cart = ({cart,handleRemoveFromLs}) => {
    return (
        <div>
            <h2>cart: {cart.length}</h2>
            <div className='cart-container'>
                {
                    cart.map(bottel=><div key={bottel.id}>
                        <img src={bottel.img}></img>
                        <button onClick={()=>handleRemoveFromLs(bottel.id)}>Remove</button>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Cart;