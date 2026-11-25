import ArrowOutward from "@mui/icons-material/ArrowOutward";
import portrait from "../images/myFace.jpg";

const experience = [
  ["TD Bank", "Machine Learning Scientist Intern", "Sep 2026 – Present", "Built a Databricks-based framework to automate machine learning experiments and evaluated causal foundation models against traditional causal meta-learners."],
  ["AltaML", "Machine Learning Engineer Intern", "May – Aug 2025", "Prototyped LLM workflows to extract structured data from medical documents and built automated evaluations against FHIR-standardized data."],
  ["AltaML", "Machine Learning Engineer Intern", "May – Sep 2023", "Built a Python and SQL forecasting pipeline for customer turnover and improved classification accuracy from 72% to 83%."],
  ["Mobility Quotient", "Software Engineer Intern", "May 2021 – May 2022", "Built data pipelines for e-commerce catalogs and wrote end-to-end Selenium tests."],
];

function Experience() {
  return (
    <section className="container inner-page">
      <div className="about-intro">
        <header className="page-intro">
          <p className="eyebrow">About me</p>
          <h1>Hi, I’m Hashir<span>.</span></h1>
          <p>I’m a machine learning engineer and a master’s student in Electrical and Computer Engineering at the University of Waterloo. I research robust algorithmic recourse and benchmark methods that suggest steps people can take to change a model’s decision.</p>
          <p>I studied software engineering at the University of Calgary and have worked on causal ML, LLM evaluation, and data pipelines.</p>
          <a className="button button-outline" href={`${process.env.PUBLIC_URL}/Hashir-Ahmed_Resume.pdf`}>View résumé <ArrowOutward /></a>
        </header>
        <img className="portrait" src={portrait} alt="Hashir Ahmed" />
      </div>
      <section className="experience">
        <h2>Experience<span>.</span></h2>
        {experience.map(([company, role, dates, description]) => (
          <article className="experience-row" key={dates}>
            <div><p className="eyebrow">{company}</p><p>{dates}</p></div>
            <div><h3>{role}</h3><p>{description}</p></div>
          </article>
        ))}
      </section>
    </section>
  );
}

export default Experience;
