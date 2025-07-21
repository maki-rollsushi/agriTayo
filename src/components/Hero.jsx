import "../styles/Hero.css";

function Hero() {
  return (
    <div>
      <div className="hero-section">
        <div className="hero-h1">
          <h1>
            Empowering <span className="yellow">Farmers</span>.
          </h1>
          <h1>Fresh Food for All.</h1>
        </div>

        <p className="hero-p">
          Connecting Filipino farmers with consumers <br /> for a transparent &
          sustainable food system.
        </p>
        <div className="hero-b">
          <button
            onClick={() =>
              document
                .getElementById("marketplace")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Shop Now
          </button>
          <button
            onClick={() =>
              document
                .getElementById("about")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
