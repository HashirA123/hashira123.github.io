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
    <section className="container inner-page">
      <header className="page-intro">
        <h1>Let’s talk</h1>
        <p>Email is the best way to reach me about research or engineering work.</p>
      </header>
      <div className="project-grid">
        {channels.map(([Icon, name, handle, url]) => (
          <a className="contact-card" key={name} href={url}>
            <Icon />
            <h2>{name} <ArrowOutward /></h2>
            <p>{handle}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Contact;
