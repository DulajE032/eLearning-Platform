import { Link } from 'react-router-dom';
import { BookOpen, LogIn, UserPlus } from 'lucide-react';

const Navbar = () => {
  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 1000,
      padding: '1rem 2rem',
      borderRadius: '50px',
    }}>
      <div className="glass-panel" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 2rem',
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.25rem', fontWeight: 'bold' }}>
          <BookOpen color="var(--primary-color)" />
          EduSpher
        </Link>
        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          <Link to="/">Home</Link>
          <Link to="/student">Student Portal</Link>
          <Link to="/admin-secure">Admin</Link>
          <Link to="/login" className="glass-btn" style={{ padding: '0.5rem 1rem' }}>Login</Link>
          <Link to="/signup" className="glass-btn" style={{ padding: '0.5rem 1rem', background: 'var(--primary-color)', color: 'white' }}>Sign Up</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
