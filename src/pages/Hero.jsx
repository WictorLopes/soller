import "./Hero.css";

const Hero = () => (
  <section className="hero">
    <div className="hero-content">
      <h1>Get the Sun to Power Your Home</h1>
      <p>
        Vivamus viverra nibh enim et aliquam, enim. Tempor, sit mus viverra orci
        dui consequat turpis scelerisque.
      </p>
      <button className="cta-button">
        Request a Quote <span>→</span>
      </button>

      <div className="testimonial">
        <div>
          <p>
            “Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus
            viverra orci dui consequat turpis scelerisque faucibus.”
          </p>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src="src/assets/woman.jpeg" className="profile-img" />
            <div style={{display: "flex",flexDirection: "column"}}>
              <span style={{ fontSize: "18px" }}>Rwanda Melfor</span>
              <span style={{ fontSize: "16px", color: "#475569" }}>
                zerowaste.com
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="hero-image">
      <img src="src/assets/solarworker.jpeg"/>
    </div>
  </section>
);

export default Hero;
