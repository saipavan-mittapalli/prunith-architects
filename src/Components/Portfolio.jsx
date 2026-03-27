import React, { useState } from 'react';
import '../Portfolio.css';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('3D Models');

  const categories = ['3D Models', 'Commercial Space', 'Residential', '2D Sketches'];

  const portfolioData = {
    '3D Models': [
      { id: '3d-1', title: 'Basic Bedroom render', video: '/src/assets/3D models/video1.mp4' },
      { id: '3d-2', title: 'Hall with TV unit', video: '/src/assets/3D models/video2.mp4' },
    ],
    'Commercial Space': [
      { id: 'comm-1', title: 'Adicto Cafe, Warangal', video: '/src/assets/Commercial Space/video3.mp4' },
      { id: 'comm-2', title: 'Tirumala Home Foods, Khammam', video: '/src/assets/Commercial Space/video4.mp4' },
    ],
    'Residential': [
      { id: 'res-1', title: 'Modern Villa', video: '/src/assets/Residential/video5.mp4' },
      { id: 'res-2', title: 'Modern Villa', video: '/src/assets/Residential/video6.mp4' },
      { id: 'res-3', title: 'Modern Villa', video: '/src/assets/Residential/video7.mp4' },
      { id: 'res-4', title: 'Modern Villa', video: '/src/assets/Residential/video8.mp4' },
    ],
    '2D Sketches': [
      { id: 'sk-1', title: 'Muti-purpose Hall', video: 'src/assets/2D sketches/Multi-purpose Hall.mp4' },
      { id: 'sk-2', title: 'Hotel Blueprint', video: '/src/assets/2D sketches/Hotel1.mp4' },
      { id: 'sk-3', title: 'Resort 2D Plan', video: '/src/assets/2D sketches/Resort1.mp4' },
    ]
  };

  return (
    <section className="portfolio-section" id="portfolio">
      <div className="section-header">
        <span className="label">Our Portfolio</span>
        <h2 className="section-title">Visual <span>Legacies</span></h2>
      </div>

      <div className="portfolio-tabs">
        {categories.map((cat) => (
          <button 
            key={cat} 
            className={`tab-btn ${activeTab === cat ? 'active' : ''}`}
            onClick={() => setActiveTab(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="portfolio-display" key={activeTab}>
        <div className="video-grid">
          {portfolioData[activeTab].map((item) => (
            <div key={item.id} className="video-card reveal-active">
              <div className="video-wrapper">
                <video 
                  src={item.video} 
                  autoPlay 
                  muted 
                  loop 
                  playsInline
                />
                <div className="video-overlay">
                  <h3>{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;