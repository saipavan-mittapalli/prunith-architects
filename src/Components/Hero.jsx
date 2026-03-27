import '../Hero.css'

const Hero = () => {
  return (
    <header className="hero" id="home">
      <img 
        src="./src/assets/imgs/hero.webp" 
        className="hero-img" 
        alt="Modern Luxury Interior Architecture" 
      />
      <div className="hero-content">
        <h1>Designing Spaces <br /> <span>that Inspire Legacy.</span></h1>

        <p>
          Where technical precision meets royal aesthetics. We craft bespoke 
          architectural solutions for the visionary.
        </p>

        <div className="hero-buttons">
          <a href="#portfolio" className="cta-button cta-solid">View Portfolio</a>
          <a href="#contact" className="cta-button cta-outline">Get a Quote</a>
        </div>
      </div>
    </header>
  );
};

export default Hero;