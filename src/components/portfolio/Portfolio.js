import React from "react";
import "./portfolio.css";
import budgetImg from "./budget_app.png";
import weatherImg from "./weather_app.png";
import shoppingImg from "./shopping_Card.png";
import minesweeperImg from "./minesweeper.png";
import portfolio from "./portfolio.png";
import blog from "./blog.png";

const data = [
  {
    id: 1,
    image: blog,
    title: "Blog Platform JS",
    github: "https://github.com/nikolaevK/Firebase_Blog",
    visit: "https://celebrated-kulfi-06509e.netlify.app/",
  },
  {
    id: 2,
    image: weatherImg,
    title: "Weather App JS",
    github: "https://github.com/nikolaevK/Weather-Application",
    visit: "https://frabjous-torte-84eace.netlify.app/",
  },
  {
    id: 3,
    image: portfolio,
    title: "Portfolio JS",
    github: "https://github.com/nikolaevK/Portfolio",
    visit: "https://knikolaev.com/",
  },
  {
    id: 4,
    image: budgetImg,
    title: "Expense Tracker TS",
    github: "https://github.com/nikolaevK/Track-Expenses",
    visit: "https://moonlit-churros-cd4eff.netlify.app",
  },
  {
    id: 5,
    image: shoppingImg,
    title: "Shopping Card TS",
    github: "https://github.com/nikolaevK/Web-Store-Add-To-Cart",
    visit: "https://gilded-cendol-93ca80.netlify.app",
  },
  {
    id: 6,
    image: minesweeperImg,
    title: "Minesweeper JS",
    github: "https://github.com/nikolaevK/Minesweeper-Clone",
    visit: "https://chipper-panda-106f57.netlify.app",
  },
];

export default function Portfolio() {
  return (
    <div className="portfolio-section">
      <h1>My Recent Work</h1>
      <div className="portfolio-container">
        {data.map(({ id, image, title, github, visit }) => {
          return (
            <article key={id} className="portfolio-item">
              <div className="portfolio-item-img">
                <img src={image} alt="/icon"></img>
              </div>
              <div className="project-description-container">
                <p className="portfolio-item-title">{title}</p>
                <div className="portfolio-btn-container">
                  <a className="portfolio-btn" href={github} target="blank">
                    GitHub
                  </a>
                  <a
                    className="portfolio-btn portfolio-btn-secondary"
                    href={visit}
                    target="blank"
                  >
                    Visit
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
