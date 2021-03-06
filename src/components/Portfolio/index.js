import React from "react";
import Project from "../Projects";

const projects = [
  {
    id: 0,
    title: "Budget Buddy",
    languages: "JavaScript, HTML, CSS, MONGODB Atlas, Heroku",
    packages: "Express.js, mongoose",
    image: "../../assets/projects/budgetbuddy.png",
    description: "Allows users to track their budget and develop a spending plan",
    repo: "https://github.com/Tez28/budget-buddy",
    live: "https://dry-ridge-16845.herokuapp.com/",
  },
  {
    id: 1,
    title: "NotWork",
    languages: "HTML, CSS, Foudation CSS 6 Framework, JavaScript, jQuery,",
    packages: "bcrypt, dotenv, Express.js, express-handlebars, Express, Handlebars, Express-Session, MySQL, MySQL2, Sequelize ORM",
    image: "../../assets/projects/NotWork.png",
    description: "Allows you to edit and post blogs. You can also leave comments on your own blog or the blogs of others.",
    repo: "https://github.com/Tez28/NotWork",
    live: "https://fast-wave-33945.herokuapp.com/",
  },
  {
    id: 2,
    title: "Code Jeopardy",
    languages: "HTML, CSS and JavaScript",
    packages: "N/A",
    image: "../../assets/projects/codejeopardy.png",
    description: "Try your hand at a comic book quiz spanning DC and Marvel",
    live: "https://github.com/Tez28/code-jeopardy",
    repo: "https://tez28.github.io/code-jeopardy/",
  },
  {
    id: 3,
    title: "Direct Employee",
    languages: "JavaScript",
    image: "../../assets/projects/directemployee.png",
    packages: "Nodejs, Express",
    description: "Track, add, remove and even update employees and departments with this great app.",
    repo: "https://github.com/Tez28/direct-employee",
    live: "N/A",
  },
  {
    id: 4,
    title: "Noteify",
    languages: "HTML, CSS, JavaScript",
    packages: "Heroku, Expressjs",
    image: "../../assets/projects/Noteify.png",
    description: "Keep notes readily available for any topic",
    repo: "https://github.com/Tez28/noteify",
    live: "https://noteifys.herokuapp.com/",
  },
  {
    id: 5,
    title: "Neighbor Good",
    languages: "React, React Bootstrap, Styled Components,",
    packages: " Apollo, GraphQl, MongoDb, Node/Express",
    image: "../../assets/projects/neighbor.png",
    description: "In need of help any task small or large, just ask your neighbor",
    repo: "https://github.com/Jasonwesleysmith/neighbor-good",
    live: "https://project-3-neighbor-good.herokuapp.com/",
  },
  {
    id: 6,
    title: "Carpe The Day",
    languages: "HTML, CSS and JavaScript",
    packages: "N/A",
    image: "../../assets/projects/carpetheday.png",
    description: "Seize the day with this daily calendar tracker",
    repo: "https://github.com/Tez28/carpe-the-day",
    live: "https://tez28.github.io/carpe-the-day/",
  },
];

function Portfolio() {
  return (
    <div>
      <p className="content is-medium">Portfolio</p>
      <hr />

      <Project projects={projects} />
    </div>
  );
}

export default Portfolio;