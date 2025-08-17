// components/HeaderNavigation.js

import React, { useState } from 'react';
import Link from 'next/link';
import { FaBars } from 'react-icons/fa';

const navigation = [
  { name: 'About Us', href: '#' },
  { name: 'Get Involved', href: '#' },
  { name: 'Services', href: '#' },
];

const HeaderNavigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link href="/" className="p-3">
          <img
            src="./assets/logo.jpg"
            alt="logo"
            className="navbar-brand img-fluid"
            height={'75px'}
            width={'75px'}
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FaBars />
        </button>
        <div className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {navigation.map((item, index) => (
              <li key={index} className="nav-item">
                <Link href={item.href} className="nav-link">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {menuOpen && (
        <div className="overlay" onClick={() => setMenuOpen(false)}></div>
      )}
    </header>
  );
};

export default HeaderNavigation;
