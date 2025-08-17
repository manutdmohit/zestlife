// pages/index.js

import React from 'react';

const Home = () => {
  return (
    <div>
      <main>
        <section className="hero">
          <h1>Welcome to the NDIS Organization</h1>
          <p>
            Empowering individuals with disabilities through support and
            services.
          </p>
          <button>Learn More</button>
        </section>
        <section className="about">
          <h2>About Us</h2>
          <p>
            We are a non-profit organization dedicated to providing support and
            services to individuals with disabilities.
          </p>
        </section>
        <section className="services">
          <h2>Our Services</h2>
          <p>
            Explore the range of services we offer to support individuals with
            disabilities.
          </p>
        </section>
      </main>
    </div>
  );
};

export default Home;
