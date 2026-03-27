import '../Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-brand">
          <h2 className="logo">PRUNITH <span>ARCHITECTS</span></h2>
          <p>Crafting high-end architectural solutions with a focus on legacy and precision.</p>
        </div>

        
        <div className="footer-links">
          <h4>Navigation</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        
        <div className="footer-contact">
          <h4>Connect</h4>
          <p>Whatsapp: <a href="https://wa.me/YOUR_NUMBER" target="_blank" rel="noreferrer">Prunith Architects</a></p>
          <p>Instagram: <a href="https://www.instagram.com/prunitharchitects" target="_blank" rel="noreferrer">@prunitharchitects</a></p>
          <p>Email: inquire@prunitharchitects.in</p>
          <p>Location: Warangal, Telangana, India.</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 PRUNITH ARCHITECTS. ALL RIGHTS RESERVED.</p>
        <p>Developed by Sai Pavan Mittapalli</p>
      </div>
    </footer>
  );
};

export default Footer;