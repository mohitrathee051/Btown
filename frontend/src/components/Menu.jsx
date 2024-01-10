import React from "react";
import { data } from "../restApi.json";
const Menu = () => {
  return (
    <section className="menu" id="menu">
      <div className="container">
        <div className="heading_section">
          <h1 className="heading">POPULAR DISHES</h1>
          <p>
            "Btown Brew Haven offers a variety of dishes, including breakfast, lunch, and dinner. We also have a wide range of
            beverages, including coffee, tea, and smoothies. Our menu is designed to please a variety of palates, with a focus on
            fresh, seasonal ingredients."
          </p>
        </div>
        <div className="dishes_container">
          {data[0].dishes.map((element) => {
            return (
              <div className="card" key={element.id}>
                <img src={element.image} alt={element.title} />
                <h3>{element.title}</h3>
                <button>{element.category}</button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Menu;
