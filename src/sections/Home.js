import { Link } from "react-router-dom";
import ArrowForward from "@mui/icons-material/ArrowForward";
import portrait from "../images/myFace.jpg";
import { FeaturedProjects } from "./Projects";

function Home() {
  return (
    <>
      <section className="hero container">
        <div className="hero-content">
          <h1>Hashir Ahmed</h1>
          <p className="hero-description">
            I’m a machine learning engineer and a master’s student at the University of Waterloo.
            My research compares methods that suggest what someone could change to get a
            different outcome from a model.
          </p>
          <div className="hero-actions">
            <Link className="text-link" to="/about">About me <ArrowForward /></Link>
            <a className="text-link" href={`${process.env.PUBLIC_URL}/Hashir-Ahmed_Resume.pdf`}>Résumé (PDF)</a>
          </div>
        </div>
        <img className="home-portrait" src={portrait} alt="Hashir Ahmed" />
      </section>
      <section className="featured container">
        <div className="section-heading">
          <h2>Selected projects</h2>
          <Link className="text-link" to="/projects">All projects <ArrowForward /></Link>
        </div>
        <FeaturedProjects />
      </section>
    </>
  );
}

export default Home;
