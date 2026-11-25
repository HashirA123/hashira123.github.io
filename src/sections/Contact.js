import ArrowOutward from "@mui/icons-material/ArrowOutward";
import AlternateEmail from "@mui/icons-material/AlternateEmail";
import GitHub from "@mui/icons-material/GitHub";
import LinkedIn from "@mui/icons-material/LinkedIn";

const channels = [
  [AlternateEmail, "Email", "hashirahmed204@gmail.com", "mailto:hashirahmed204@gmail.com"],
  [GitHub, "GitHub", "@HashirA123", "https://github.com/HashirA123"],
  [LinkedIn, "LinkedIn", "Hashir Ahmed", "https://www.linkedin.com/in/hashirahmed204/"],
];

function Contact() {
  return (
    <section id="contact" className="container content-section contact-section" aria-labelledby="contact-heading">
      <header className="section-intro reveal">
        <h2 id="contact-heading">Get in touch</h2>
        <p>Email is the best way to reach me about research or engineering work.</p>
      </header>
      <div className="project-grid reveal">
        {channels.map(([Icon, name, handle, url]) => (
          <a className="contact-card" key={name} href={url}>
            <Icon />
            <h3>{name} <ArrowOutward /></h3>
            <p>{handle}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Contact;
