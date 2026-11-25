const experience = [
  ["TD Bank", "Machine Learning Scientist Intern", "Sep 2026 – Present", "Built a Databricks-based framework to automate machine learning experiments and evaluated causal foundation models against traditional causal meta-learners."],
  ["AltaML", "Machine Learning Engineer Intern", "May – Aug 2025", "Prototyped LLM workflows to extract structured data from medical documents and built automated evaluations against FHIR-standardized data."],
  ["AltaML", "Machine Learning Engineer Intern", "May – Sep 2023", "Built a Python and SQL forecasting pipeline for customer turnover and improved classification accuracy from 72% to 83%."],
  ["Mobility Quotient", "Software Engineer Intern", "May 2021 – May 2022", "Built data pipelines for e-commerce catalogs and wrote end-to-end Selenium tests."],
];

function Experience() {
  return (
    <section id="about" className="container content-section about-section" aria-labelledby="about-heading">
      <div className="about-intro reveal">
        <h2 id="about-heading">About</h2>
        <div className="about-copy">
          <p>I’m a master’s student in Electrical and Computer Engineering at the University of Waterloo. I benchmark algorithmic recourse methods, which suggest what someone could change to get a different outcome from a model. My research asks whether those suggestions still work when the model changes.</p>
          <p>I studied software engineering at the University of Calgary and have worked on causal ML, LLM evaluation, and data pipelines.</p>
        </div>
      </div>
      <div className="experience">
        <h3 className="experience-heading reveal">Experience</h3>
        {experience.map(([company, role, dates, description]) => (
          <article className="experience-row reveal" key={dates}>
            <div><p className="eyebrow">{company}</p><p>{dates}</p></div>
            <div><h4>{role}</h4><p>{description}</p></div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Experience;
