import React from "react";
import "./portfolio.css";
import budgetImg from "./your_wallet.png";
import blog from "./blog.png";
import algoImg from "./algo_visual.png";
import messenger from "./messenger.png";
import eCommerce from "./e-commerce.png";
import eCommerceDash from "./e-commerce-dash.png";

const data = [
  {
    id: 1,
    image: eCommerce,
    title: "E-Commerce",
    github: "https://github.com/nikolaevK/Coffee-Machines-E-Commerce",
    visit: "https://coffee-machines-e-commerce.vercel.app/",
  },
  {
    id: 2,
    image: eCommerceDash,
    title: "Dashboard E-Commerce",
    github: "https://github.com/nikolaevK/e-commerce-dash",
    visit: "https://e-commerce-dash.vercel.app/",
  },
  {
    id: 3,
    image: blog,
    title: "Blog Platform JS",
    github: "https://github.com/nikolaevK/blog",
    visit: "https://blog-khaki-nine-23.vercel.app",
  },
  {
    id: 4,
    image: messenger,
    title: "Messenger TS",
    github: "https://github.com/nikolaevK/Messenger-TS-Front-End",
    visit: "https://messenger-ts-front-end.vercel.app",
  },
  {
    id: 5,
    image: algoImg,
    title: "Algo Visual TS",
    github: "https://github.com/nikolaevK/Sorting-Visualizer",
    visit: "https://effervescent-concha-cbb482.netlify.app",
  },
  {
    id: 6,
    image: budgetImg,
    title: "Your-Wallet TS",
    github: "https://github.com/nikolaevK/your-wallet",
    visit: "https://your-wallet-eight.vercel.app",
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
