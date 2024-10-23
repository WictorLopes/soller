import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadphones } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">soller</div>
      <div className="header-left">
        <nav className="nav">
          <a href="#">Products</a>
          <a href="#">Solutions</a>
          <a href="#">Services</a>
          <a href="#">Configure</a>
        </nav>
      </div>

      <div className="header-right">
        <div className="contact-info">
          <span
            role="img"
            aria-label="phone"
            style={{ backgroundColor: "transparent" }}
          >
            <FontAwesomeIcon
              icon={faHeadphones}
              style={{ backgroundColor: "transparent" }}
            />
          </span>{" "}
          555 818 282
        </div>
        <button className="header-button">
          Request a Quote{"  "}
          <FontAwesomeIcon
            style={{ marginLeft: "8px", backgroundColor: "transparent" }}
            icon={faArrowRight}
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
