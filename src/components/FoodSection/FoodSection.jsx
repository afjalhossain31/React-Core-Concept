import { use, useState } from "react";
import Cart from "../Cart/cart";
import SingleFood from "../SingleFood/SingleFood";

const FoodSection = ({ foodDataRes }) => {
  const data = use(foodDataRes);
  const foods = data?.meals ?? [];
  const [cart, setCart] = useState([]);


  const addToCart = (foodData) => {
    setCart([...cart, foodData]);
  };

  const handleOrder = () => {
    setCart([]);
  };
  return (
    <div className="foods-container-parent">
      <div style={{ width: "75%" }} className="foods-container">
        {foods.map((food) => (
          <SingleFood key={food.idMeal} addToCart={addToCart} food={food}></SingleFood>
        ))}
      </div>

      <div style={{ backgroundColor: "cyan", width: "25%" }}>
        <h1>Cart</h1>
        <Cart cart={cart}></Cart>
        <button onClick={handleOrder}>Order</button>
      </div>
    </div>
  );
};

export default FoodSection;