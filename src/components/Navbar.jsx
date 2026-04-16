import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BookOpen, Menu, X } from 'lucide-react'
import './Navbar.css'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleLogoClick = (e) => {
    e.preventDefault();
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="nav-container" style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 1000,
      borderRadius: '50px',
    }}>
      <div className="glass-panel nav-glass-panel">
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
          <a href="/" onClick={handleLogoClick} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.25rem', fontWeight: 'bold', color: 'inherit', textDecoration: 'none' }}>
            <BookOpen color="var(--primary-color)" />
            EduSpher
          </a>
          <button className="mobile-menu-btn" onClick={toggleMenu}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <div className={`nav-links ${isMenuOpen ? 'mobile-nav-dropdown' : ''}`}>
          <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/" onClick={() => setIsMenuOpen(false)}>Classes</Link>
          <Link to="/" onClick={() => setIsMenuOpen(false)}>Results</Link>
          <Link to="/" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          <Link to="/" onClick={() => setIsMenuOpen(false)}>About</Link>
          <Link to="/login" className="glass-btn" style={{ padding: '0.5rem 1rem' }} onClick={() => setIsMenuOpen(false)}>Login</Link>
          <Link to="/signup" className="glass-btn" style={{ padding: '0.5rem 1rem', background: 'var(--primary-color)', color: 'white' }} onClick={() => setIsMenuOpen(false)}>Sign Up</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
