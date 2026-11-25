import { Link } from "react-router-dom";
import ArrowForward from "@mui/icons-material/ArrowForward";
import ArrowOutward from "@mui/icons-material/ArrowOutward";
import GitHub from "@mui/icons-material/GitHub";
import LinkedIn from "@mui/icons-material/LinkedIn";
import RecourseGraphic from "../components/RecourseGraphic";
import { ProjectGrid } from "./Projects";

function Home() {
  return (
    <>
      <section className="hero container">
        <div className="hero-content">
          <p className="eyebrow hero-kicker"><span className="status-dot" /> ML ENGINEER &amp; RESEARCHER</p>
          <h1>Hashir<br />Ahmed<span>.</span></h1>
          <p className="hero-description">
            I build machine learning systems and research how people can act on AI decisions.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" to="/projects">Explore projects <ArrowForward /></Link>
            <a className="button button-outline" href={`${process.env.PUBLIC_URL}/Hashir-Ahmed_Resume.pdf`}>
              View résumé <ArrowOutward />
            </a>
          </div>
          <div className="hero-socials">
            <a href="https://github.com/HashirA123"><GitHub /> GitHub</a>
            <a href="https://www.linkedin.com/in/hashirahmed204/"><LinkedIn /> LinkedIn</a>
          </div>
        </div>
        <RecourseGraphic />
      </section>
      <section className="featured">
        <div className="container">
          <div className="section-heading">
            <h2>Featured projects<span>.</span></h2>
            <Link className="text-link" to="/projects">All projects <ArrowForward /></Link>
          </div>
          <ProjectGrid featured />
        </div>
      </section>
    </>
  );
}

export default Home;
