import React from 'react';

import './App.css';
import heroimg from '../src/images/heroimg.jpeg'
import profile from '../src/images/profile.jpg'

const Header = () => {
  return (
    <header className="header-container">
      <nav className="navbar">
        <div className="logo">
          <h1>zysk</h1>
        </div>
        <ul className={`nav-links $(menuOpen ? 'show':"}`}>
          <li><a href="#home">Home</a></li>
          <li><a href="#products">Products</a></li>
          <li><a href="#resources">Resources</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#faq">FAQ</a></li>
        </ul>
        <div className="profile">
          <img src={profile} alt="Profile" className="profile-img" />
        </div>
        <button className="hamburger-menu" aria-label="Menu">
          ☰
        </button>
      </nav>
      <div className="header-content">
        <p className="new-feature">New feature</p>
        <a href="#team-dashboard" className="dashboard-link">Check out the team dashboard →</a>
        <h2 className="header-title">Beautiful analytics to grow smarter</h2>
        <p className="header-description">
          Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.
        </p>
        <div className="header-buttons">
          <button className="btn-demo">Demo</button>
          <button className="btn-signup">Sign up</button>
        </div>
        <img src={heroimg} class="responsive-img"/>
      </div>
    </header>
  );
};

export default Header;