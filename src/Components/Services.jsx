import React from 'react';
import '../Services.css';

const Services = () => {
  const services = [
    {
      id: '01',
      title: '2D Technical Sketching',
      description: 'Precise architectural blueprints and floor plans tailored for regulatory approval and structural clarity.'
    },
    {
      id: '02',
      title: '3D Interior Modeling',
      description: 'Photorealistic visualizations that allow you to walk through your space before a single brick is laid.'
    },
    {
      id: '03',
      title: 'Structural Planning',
      description: 'Comprehensive engineering layouts focusing on safety, sustainability, and long-term legacy.'
    },
    {
      id: '04',
      title: 'Site Consultation',
      description: 'Professional on-site guidance to ensure the physical construction matches the royal vision of the design.'
    }
  ];

  return (
    <section className="services-section" id="services">
      <div className="container">
        <div className="services-header">
          <p className="subtitle">Expertise</p>
          <h2 className="section-heading">Professional <span>Services</span></h2>
        </div>
        
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <span className="service-id">{service.id}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="gold-bar"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;