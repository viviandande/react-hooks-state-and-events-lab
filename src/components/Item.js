
import React, {useState} from "react";

function Item({ name, category }) {
  const[update, setUpdate]= useState(false)


  function setCart(){
    setUpdate(!update)
  }

  return (
    <li className={update? 'in-cart' : ''}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={setCart} className={update? 'add': 'remove'}>{update? 'Remove From Cart':'Add to Cart' }</button>
    </li>
  );
}

export default Item;