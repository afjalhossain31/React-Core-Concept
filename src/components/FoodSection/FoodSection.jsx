import { use } from "react";
import SingleFood from "../SingleFood/SingleFood";

const FoodSection = ({ foodDataRes }) => {
  const data = use(foodDataRes);
  const foods = data?.meals ?? [];

  return (
    <div className="foods-container-parent">
      <div className="foods-container">
        {foods.map((food) => (
          <SingleFood key={food.idMeal} food={food}></SingleFood>
        ))}
      </div>
    </div>
  );
};

export default FoodSection;