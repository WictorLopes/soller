import "./Hero.css";

const Hero = () => (
  <section className="hero">
    <div className="hero-content">
      <h1>Get the Sun to Power Your Home</h1>
      <p>
        Vivamus viverra nibh enim et aliquam, enim. Tempor, sit mus viverra orci
        dui consequat turpis scelerisque.
      </p>
      <button className="hero-button">
        Request a Quote{" "}
        <span style={{ backgroundColor: "transparent" }}>→</span>
      </button>

      <div className="testimonial">
        <div style={{ marginTop: "15%" }}>
          <p>
            “Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra
            orci dui consequat turpis scelerisque faucibus.”
          </p>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src="/assets/perfil/cout.png" className="profile-img" />
            <div style={{ display: "flex", flexDirection: "column" }}>
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
      <img src="/assets/solarworker.png" />
    </div>
  </section>
);

export default Hero;
