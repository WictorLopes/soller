import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <img src="/assets/logofooter.png" className="logo-img" style={{marginRight:"2%"}} />
      <div className="footer-left">
        <p>@ 2023 Soller, Inc. All rights reserved.</p>
      </div>

      <div className="footer-right">
        <nav className="nav">
          <a href="#">Terms</a>
          <a href="#">Privacy</a>
          <a href="#">Support</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
