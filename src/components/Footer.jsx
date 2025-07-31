/**
 * Footer
 *
 * Displays the page footer with the site logo, social media icons,
 * and a tagline. Used globally across the site layout.
 */

function Footer() {
  return (
    <footer>
      <div className="page-footer">
        <div className="logo-title">
          <a href="/">
            <img
              src="src/assets/logo-i.png"
              alt="Logo"
              className="logo-image"
            />
          </a>
          <h1 className="footer-title">
            agri<span className="yellow">Tayo</span>!
          </h1>
        </div>
        <div className="soc-med-holder">
          <a href="#">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="https://github.com/maki-rollsushi/STARTer-Repo">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="#">
            <i className="fa-solid fa-envelope"></i>
          </a>
        </div>

        <p className="footer-tagline">
          where <span className="yellow">farmers</span> <br />
          are <span className="underline-yellow">winners</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
