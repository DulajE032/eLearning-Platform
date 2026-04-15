import { PlayCircle, MessageCircle } from 'lucide-react';
import heroBg from '../assets/hero_bg.png';
import videoThumb from '../assets/video_thumbnail.png';

const Home = () => {
  return (
    <div style={{ minHeight: '100vh' }}>
      {/* Hero Section */}
      <section style={{
        minHeight: '100vh',
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        paddingTop: '80px'
      }}>
        {/* Overlay */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(15, 23, 42, 0.6)' }} />
        
        <div className="glass-panel container" style={{ position: 'relative', textAlign: 'center', padding: '4rem 2rem', maxWidth: '800px' }}>
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', lineHeight: 1.2 }}>Unlock Your Potential with Our Online MCQs</h1>
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem', opacity: 0.9 }}>
            Join our professional e-learning platform to practice, learn, and excel in your exams. 
            Real-time results and timed questions.
          </p>
          <button className="glass-btn" style={{ fontSize: '1.2rem', padding: '1rem 2.5rem', background: 'var(--primary-color)' }}>
            Start Learning Now
          </button>
        </div>
      </section>

      {/* Enroll Section */}
      <section className="container" style={{ padding: '5rem 2rem' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '4rem' }}>How to Enroll?</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
          
          <div className="glass-panel" style={{ position: 'relative', overflow: 'hidden', padding: 0 }}>
            <img src={videoThumb} alt="Enrollment Video" style={{ width: '100%', display: 'block', opacity: 0.8 }} />
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', cursor: 'pointer' }}>
              <PlayCircle size={64} color="white" />
            </div>
          </div>
          
          <div className="glass-panel" style={{ padding: '3rem' }}>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Quick Steps</h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.5rem', fontSize: '1.1rem' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ background: 'var(--primary-color)', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>1</div>
                Sign up for an account
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ background: 'var(--primary-color)', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>2</div>
                Choose your grade
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ background: 'var(--primary-color)', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>3</div>
                Join the WhatsApp group for updates
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ background: 'var(--primary-color)', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>4</div>
                Start taking online MCQs
              </li>
            </ul>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="container" style={{ padding: '5rem 2rem' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '4rem' }}>Online Quizses</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          
          
        </div>
        
      </section>
        

      {/* WhatsApp Groups Section */}
      <section className="container" style={{ padding: '2rem 2rem 5rem 2rem' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '4rem' }}>Join Our WhatsApp Groups</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {[9, 10, 11].map(grade => (
            <div key={grade} className="glass-panel" style={{ padding: '2.5rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
              <MessageCircle size={48} color="#25D366" />
              <h3 style={{ fontSize: '1.5rem' }}>Grade {grade} Community</h3>
              <p style={{ opacity: 0.8 }}>Get instant updates, papers, and discuss with peers.</p>
              <button className="glass-btn" style={{ width: '100%', borderColor: '#25D366', color: '#25D366', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                <MessageCircle size={20} /> Join Group
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
