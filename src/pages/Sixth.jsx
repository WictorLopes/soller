import "./Sixth.css";

const Sixth = () => (
  <section className="sixth">
    <div className="sixth-content">
      <p style={{ color: "#D97706" }}>Get the Sun to power your home</p>
      <div className="sixth-text">
        <h1 style={{ backgroundColor: "transparent" }}>
          All the power that you need for your house is now available
        </h1>
        <div style={{backgroundColor:"transparent"}}>
          <button className="request-button">
            Request a Quote{" "}
            <span style={{ backgroundColor: "transparent" }}>→</span>
          </button>
          <p>Egestas fringilla aliquam leo</p>
        </div>
      </div>
      <img src="src\assets\macbook.png" className="mac-img" />
    </div>
  </section>
);

export default Sixth;
