import React from 'react';
import LogoWhite from '../../assets/logo-NuKenzie-white.svg';
import ilustration from '../../assets/illustration.svg';

const Home = ({ children }) => {
  return (
    <section className="section-home ">
      <div className="container-home container">
        <div className="main-content">
          <div className="logo">
            <img src={LogoWhite} alt="logo" />
          </div>

          <div className="info-text">
            <h2>Centralize o controle das suas finanças</h2>

            <span>de forma rápida e segura</span>
          </div>

          {children}
        </div>

        <div className="ilustration-div">
          <img src={ilustration} alt="Ilustração" />
        </div>
      </div>
    </section>
  );
};

export default Home;
