function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <span>© {new Date().getFullYear()} Hashir Ahmed</span>
        <div>
          <a href="https://github.com/HashirA123">GitHub</a>
          <a href="https://www.linkedin.com/in/hashirahmed204/">LinkedIn</a>
          <a href="mailto:hashirahmed204@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
