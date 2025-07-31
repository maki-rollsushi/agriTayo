import React from "react";
import bgVideo from "../assets/bg_vid.mp4";

/**
 * About
 *
 * Renders the "About agriTayo!" section with
 * a short description of the platform, and key value propositions.
 */

function About() {
  return (
    <div className="about-section">
      <div className="vid-bg">
        <video className="background-video" autoPlay loop muted playsInline>
          <source src={bgVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="video-content">
          <h1 className="about-title">
            About{" "}
            <span className="white-bg">
              agri<span className="yellow">Tayo</span>!
            </span>
          </h1>
          <p>
            A digital platform that connects Filipino farmers directly with
            consumers by enabling transparent and pre-ordered access to fresh
            produce.
          </p>
        </div>
      </div>
      <div className="about-b">
        <button
          onClick={() =>
            document
              .getElementById("marketplace")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Shop Now
        </button>
      </div>

      <div className="icon-holder">
        <div className="about-i">
          <i className="fa-solid fa-cart-shopping"></i>
          <p>Pre-Order Crops</p>
        </div>
        <div className="about-i">
          <i className="fa-solid fa-seedling"></i>
          <p>Support Farmer Capital</p>
        </div>
        <div className="about-i">
          <i className="fa-solid fa-peso-sign"></i>
          <p>Promote Price Stability</p>
        </div>
      </div>
    </div>
  );
}

export default About;
