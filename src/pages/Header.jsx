import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadphones } from '@fortawesome/free-solid-svg-icons'; 

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <div className="logo">soller</div>
        <nav className="nav">
          <a href="#">Products</a>
          <a href="#">Solutions</a>
          <a href="#">Services</a>
          <a href="#">Configure</a>
        </nav>
      </div>

      <div className="header-right">
        <div className="contact-info">
          <span role="img" aria-label="phone"><FontAwesomeIcon icon={faHeadphones} /></span>  555 818 282
        </div>
        <button className="header-button">
          Request a Quote <span>→</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
