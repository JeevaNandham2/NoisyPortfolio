import React from "react";
// Optional: You can create a CSS file for styling
import aboutimg  from'../assets/img/about1.jpg'
import './About.css';

const AboutMe = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-content">
          <div className="about-img">
            <img src={aboutimg} alt="Your Profile" className="profile-img" />
            {/* Replace the image URL with your actual image */}
          </div>
          <div className="about-text">
            <h2>About Me</h2>
            <p>
            "Capturing moments, crafting stories, and bringing visions to life through photography, cinematography, and video editing—transforming creativity into unforgettable experiences."
            </p>
            <p>
              Feel free to explore my <a href="#projects">projects</a> and <a href="#contact">contact me</a> for more details.
            </p>
          </div>
        </div>
      </div>
    </section>

  );
};

export default AboutMe;
