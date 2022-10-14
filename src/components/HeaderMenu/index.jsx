import React from "react";

import "./menu.css";

function Menu() {
  return (
    <div className="menu">
      <div className="menu__navigator">
        <a href="#">Главная</a>
        <a href="#">Каталог</a>
        <a href="#">Доставка и оплата</a>
        <a href="#">Прайс лист</a>
        <a href="#">Контакты</a>
      </div>
    </div>
  );
}

export default Menu;
