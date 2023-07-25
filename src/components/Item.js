import React,{ useState }from "react";

function Item({ name, category }) {

  const [isInCart, setIsInCart] = useState(false)

  const toggleCartStatus = () => {
    setIsInCart(prevState => !prevState);
  }
  return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={toggleCartStatus}>
        {isInCart ? "Remove From Cart" : "Add to Cart" }
        </button>
    </li>
  );
}

export default Item;
