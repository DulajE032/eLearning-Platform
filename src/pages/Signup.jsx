import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div style={{ minHeight: 'caLc(100vh - 80px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
      <div className="glass-panel" style={{ width: '100%', maxWidth: '400px', padding: '3rem 2rem' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '2rem' }}>Create Account</h2>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem' }}>Full Name</label>
            <input type="text" className="glass-input" placeholder="John Doe" />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem' }}>Email</label>
            <input type="email" className="glass-input" placeholder="student@example.com" />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem' }}>Password</label>
            <input type="password" className="glass-input" placeholder="••••••••" />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem' }}>Grade</label>
            <select className="glass-input" style={{ background: 'var(--bg-color)' }}>
              <option value="9">Grade 9</option>
              <option value="10">Grade 10</option>
              <option value="11">Grade 11</option>
            </select>
          </div>
          <button type="button" className="glass-btn" style={{ background: 'var(--primary-color)', marginTop: '1rem' }}>
            Sign Up
          </button>
        </form>
        <p style={{ textAlign: 'center', marginTop: '2rem', opacity: 0.8 }}>
          Already have an account? <Link to="/login" style={{ color: 'var(--primary-color)' }}>Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
