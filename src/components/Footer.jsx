import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen,  Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{
      background: 'rgba(15, 23, 42, 0.9)',
      borderTop: '1px solid var(--glass-border)',
      padding: '3rem 0',
      color: 'var(--text-color)',
      marginTop: 'auto'
    }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>

        {/* Brand */}
        <div>
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
            <BookOpen color="var(--primary-color)" />
            EduSpher
          </Link>
          <p style={{ opacity: 0.8, lineHeight: 1.6, marginBottom: '1rem' }}>
            Empowering students worldwide with professional online learning tools, verified MCQs, and real-time exam simulations.
          </p>
          <div style={{ display: 'flex', gap: '1rem' }}>

          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Quick Links</h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', opacity: 0.8 }}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">Classes</Link></li>
            <li><Link to="/">Results</Link></li>
            <li><Link to="/">About Us</Link></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Resources</h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', opacity: 0.8 }}>
            <li><Link to="/student">Online MCQs</Link></li>
            <li><Link to="/">Study Materials</Link></li>
            <li><Link to="/">Help Center</Link></li>
            <li><Link to="/">Terms of Service</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Contact Us</h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', opacity: 0.8 }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Mail size={16} /> support@eduspher.com
            </li>
            <li>123 Education Lane</li>
            <li>Learning City, ED 12345</li>
          </ul>
        </div>

        {/* Technical Support Section */}
        <div>
          <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Technical Support</h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', opacity: 0.8 }}>
            <li>Need help with our platform?</li>
            <li>System Status: 🟢 All Systems Operational</li>
            <li style={{ marginTop: '0.5rem' }}>
              <Link to="/contact" style={{ display: 'inline-block', padding: '0.25rem 0' }}>Report an Issue</Link>
            </li>
            <li>Call Support: +94 11 234 5678</li>
          </ul>
        </div>

      </div>
      <div style={{ textAlign: 'center', marginTop: '3rem', opacity: 0.6, fontSize: '0.9rem' }}>
        &copy; {new Date().getFullYear()} EduSpher. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
