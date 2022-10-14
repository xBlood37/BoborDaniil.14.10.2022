import React from "react";

import "./content.css";

import Background from "../../assets/img/backgroundImage.jpg";

function Content() {
  return (
    <div className="content">
      <img className="background" src={Background} alt="logo"></img>
      <div className="main">
        <div className="news-block">
          <h1>Новости</h1>
          <h5>14 октября</h5>
          <div className="news-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            quis erat nec felis dapibus euismod. Integer consectetur magna dui.
            Duis lobortis laoreet lacus.
          </div>
          <h5>14 октября</h5>
          <div className="news-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            quis erat nec felis dapibus euismod. Integer consectetur magna dui.
            Duis lobortis laoreet lacus.
          </div>
          <h5>14 октября</h5>
          <div className="news-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            quis erat nec felis dapibus euismod. Integer consectetur magna dui.
            Duis lobortis laoreet lacus.
          </div>
        </div>
        <div className="main-content">
          <div className="slider">
            <h1>Компания "Шнайдер консалт"</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              quis erat nec felis dapibus euismod. Integer consectetur magna
              dui. Duis lobortis laoreet lacus, ut venenatis enim sagittis in.
              Nunc tristique erat erat, sit amet pellentesque enim luctus quis.
              Vivamus feugiat dictum justo vitae pellentesque. Ut suscipit
              posuere congue. Praesent vel metus a risus egestas laoreet.
              <br></br>
              <br></br>
              Aliquam eu nunc dui. Morbi luctus mi eu mauris tincidunt, nec
              efficitur orci consectetur. Suspendisse potenti. Aenean accumsan
              convallis quam a elementum. Nunc euismod lectus et arcu dignissim,
              at faucibus nisl tristique. Morbi mattis purus eu vehicula porta.
              Sed metus eros, scelerisque vitae purus id, sodales efficitur
              metus.
            </p>
            <div className="second-text">
              <h3>Чем мы занимаемся?</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus quis erat nec felis dapibus euismod. Integer
                consectetur magna dui. Duis lobortis laoreet lacus, ut venenatis
                enim sagittis in. Nunc tristique erat erat, sit amet
                pellentesque enim luctus quis. Vivamus feugiat dictum justo
                vitae pellentesque. Ut suscipit posuere congue. Praesent vel
                metus a risus egestas laoreet.
              </p>
            </div>
            <div className="three-text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus quis erat nec felis dapibus euismod. Integer
                consectetur magna dui. Duis lobortis laoreet lacus, ut venenatis
                enim sagittis in. Nunc tristique erat erat, sit amet
                pellentesque enim luctus quis. Vivamus feugiat dictum justo
                vitae pellentesque. Ut suscipit posuere congue. Praesent vel
                metus a risus egestas laoreet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
