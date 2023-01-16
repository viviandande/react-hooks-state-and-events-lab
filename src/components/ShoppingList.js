import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  const[selectedCategory, setCategory] = useState('All')

  function categoryChange(e){
    setCategory(e.target.value)
  }

  const filteredShopping = items.filter((item)=>{
      if(selectedCategory === 'All'){
        return true
      }return item.category === selectedCategory
  })

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={categoryChange} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredShopping.map((filteredShopping) => (
          <Item key={filteredShopping.id} name={filteredShopping.name} category={filteredShopping.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;