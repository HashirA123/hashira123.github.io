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
        <p className="eyebrow">Contact</p>
        <h1>Let’s talk<span>.</span></h1>
        <p>I’d love to hear about research collaborations, engineering opportunities, or what you’re building.</p>
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
