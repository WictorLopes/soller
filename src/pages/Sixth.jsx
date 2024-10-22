import "./Sixth.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Sixth = () => (
  <section className="sixth">
    <div className="sixth-content">
      <p style={{ color: "#fcd34d"}}>Get the Sun to power your home</p>
      <div className="sixth-text">
        <h1 style={{ backgroundColor: "transparent" }}>
          All the power that you need for your house is now available
        </h1>
        <div className="div-button">
          <button className="request-button">
            Request a Quote{"  "}
            <FontAwesomeIcon
              style={{ marginLeft: "8px", backgroundColor: "transparent" }}
              icon={faArrowRight}
            />
          </button>
          <p style={{ fontSize: "small", marginRight: "30px" }}>
            Egestas fringilla aliquam leo
          </p>
        </div>
      </div>
      <img src="/assets/macbook.png" className="mac-img" />
    </div>
  </section>
);

export default Sixth;
