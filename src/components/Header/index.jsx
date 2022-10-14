import React from "react";

import Logo from "../../assets/img/header_logo.svg";

import "./header.css";

function Header() {
  const dateMonday = () => {
    let date = new Date();
    let monday = new Date();

    if (date.getDay()) {
      return (
        <p>
          Распродажа до {monday.setDate(date.getDate() + 8 - date.getDay())}
          .06.16
        </p>
      );
    } else {
      monday.setDate(date.getDate() + 1);
    }
  };

  return (
    <div className="header">
      <div className="header__main">
        <img className="logo" src={Logo} alt="logo"></img>
        {/* <p>Распродажа до 15.06.16</p> */}
        {dateMonday()}
        <p className="number">+8 (343) 252 52 52</p>
      </div>
    </div>
  );
}

export default Header;
