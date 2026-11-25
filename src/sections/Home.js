import ArrowDownward from "@mui/icons-material/ArrowDownward";
import ArrowOutward from "@mui/icons-material/ArrowOutward";
import portrait from "../images/myFace.jpg";

function Home() {
  return (
    <section id="home" className="hero container" aria-labelledby="home-heading">
      <div className="hero-content">
        <p className="hero-role">Machine learning engineer</p>
        <h1 id="home-heading">Hashir Ahmed</h1>
        <p className="hero-description">
          I build machine learning systems and study how people can act on a model’s decisions.
        </p>
        <div className="hero-actions">
          <a className="button button-accent" href="#projects">View projects <ArrowDownward /></a>
          <a className="text-link" href={`${process.env.PUBLIC_URL}/Hashir-Ahmed_Resume.pdf`}>
            Résumé <ArrowOutward />
          </a>
        </div>
      </div>
      <div className="hero-portrait">
        <img src={portrait} width="1200" height="1600" alt="Hashir Ahmed" />
      </div>
    </section>
  );
}

export default Home;
