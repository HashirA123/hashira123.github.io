import ArrowOutward from "@mui/icons-material/ArrowOutward";
import capstone from "../images/Capstone.png";
import scholarSpace from "../images/HomeLoggedIn.png";
import adSkipper from "../images/Ad_Skipper.png";
import eduConnect from "../images/EduConnect.jpg";
import yycAdventure from "../images/YYCAdventure.jpg";
import dbms from "../images/dbms.jpg";
import ml from "../images/ML.jpg";
import mlPlayground from "../images/ML_playground.png";

const projects = [
  { title: "ML Playground", category: "ML Infrastructure", description: "A Docker image for experimenting with machine learning in a portable environment.", image: mlPlayground, url: "https://hub.docker.com/repository/docker/hashira123/ml_playground/general" },
  { title: "ScholarSpace", category: "Full-stack", description: "An online learning platform with content search, Google sign-in, and an Apollo GraphQL API.", image: scholarSpace, url: "https://github.com/HashirA123/OLP_MERN" },
  { title: "Diabetes Medication Prediction", category: "Machine Learning", description: "A machine learning experiment to predict diabetes medication.", image: ml, url: "https://github.com/HashirA123/diabetes-medication" },
  { title: "Flexiform", category: "Capstone", description: "My 2023 software engineering capstone project.", image: capstone, url: "https://github.com/HashirA123/Flexiform" },
  { title: "YouTube Auto Ad-Skipper", category: "Automation", description: "A tool that automates skipping YouTube ads.", image: adSkipper, url: "https://github.com/HashirA123/Ad-Skipper" },
  { title: "ViVi Art Gallery", category: "Database Systems", description: "A database management system for an art gallery.", image: dbms, url: "https://github.com/HashirA123/ViVi-Art-Gallery-DBMS" },
  { title: "YYC Adventures", category: "CalgaryHacks 2020", description: "A project built for CalgaryHacks 2020.", image: yycAdventure, url: "https://devpost.com/software/yyc-adventures" },
  { title: "EduConnect", category: "CalgaryHacks 2021", description: "A project built for CalgaryHacks 2021.", image: eduConnect, url: "https://devpost.com/software/educonnect-vu8xic" },
];

export function FeaturedProjects() {
  return (
    <ul className="featured-list">
      {projects.slice(0, 3).map(({ title, description, image, url }) => (
        <li key={title}>
          <a className="featured-project" href={url} target="_blank" rel="noopener noreferrer">
            <img src={image} alt="" loading="lazy" />
            <div>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
            <ArrowOutward />
          </a>
        </li>
      ))}
    </ul>
  );
}

function ProjectGrid() {
  return (
    <div className="project-grid">
      {projects.map(({ title, category, description, image, url }) => (
        <article key={title}>
          <a className="project-card" href={url} target="_blank" rel="noopener noreferrer">
            <div className="project-image"><img src={image} alt="" loading="lazy" /></div>
            <div className="project-body">
              <p className="eyebrow">{category}</p>
              <h3>{title} <ArrowOutward /></h3>
              <p>{description}</p>
            </div>
          </a>
        </article>
      ))}
    </div>
  );
}

function Projects() {
  return (
    <section className="container inner-page">
      <header className="page-intro">
        <h1>Projects</h1>
        <p>A collection of my work in machine learning, full-stack development, and data systems.</p>
      </header>
      <ProjectGrid />
    </section>
  );
}

export default Projects;
