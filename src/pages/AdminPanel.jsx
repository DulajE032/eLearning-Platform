import { useState } from 'react';
import { LayoutDashboard, FilePlus, Clock, Users, LogOut, BookOpen } from 'lucide-react';

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

  const sidebarItems = [
    { id: 'overview', label: 'Dashboard Overview', icon: <LayoutDashboard size={20} /> },
    { id: 'papers', label: 'Manage Papers/MCQs', icon: <FilePlus size={20} /> },
    { id: 'time', label: 'Manage MCQ Time', icon: <Clock size={20} /> },
    { id: 'teachers', label: 'Manage Teachers', icon: <Users size={20} /> },
  ];

  const renderContent = () => {
    switch(activeTab) {
      case 'overview':
        return (
          <div>
            <h2 style={{ marginBottom: '2rem' }}>Platform Overview</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
              <div className="glass-panel" style={{ padding: '2rem', textAlign: 'center' }}>
                <h3 style={{ fontSize: '2rem', color: 'var(--primary-color)', marginBottom: '0.5rem' }}>1,248</h3>
                <p style={{ opacity: 0.8 }}>Total Students</p>
              </div>
              <div className="glass-panel" style={{ padding: '2rem', textAlign: 'center' }}>
                <h3 style={{ fontSize: '2rem', color: 'var(--primary-color)', marginBottom: '0.5rem' }}>18</h3>
                <p style={{ opacity: 0.8 }}>Total Courses</p>
              </div>
              <div className="glass-panel" style={{ padding: '2rem', textAlign: 'center' }}>
                <h3 style={{ fontSize: '2rem', color: 'var(--primary-color)', marginBottom: '0.5rem' }}>45</h3>
                <p style={{ opacity: 0.8 }}>Published Papers</p>
              </div>
              <div className="glass-panel" style={{ padding: '2rem', textAlign: 'center' }}>
                <h3 style={{ fontSize: '2rem', color: 'var(--primary-color)', marginBottom: '0.5rem' }}>5</h3>
                <p style={{ opacity: 0.8 }}>Active Teachers</p>
              </div>
            </div>

            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Active Courses</h3>
            <div className="glass-panel" style={{ padding: '1rem' }}>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column' }}>
                {[
                  { id: 1, name: 'Advanced Mathematics', students: 342, grade: 'Grade 11' },
                  { id: 2, name: 'Physics Fundamentals', students: 289, grade: 'Grade 10' },
                  { id: 3, name: 'Chemistry In-Depth', students: 195, grade: 'Grade 11' }
                ].map((course, idx) => (
                  <li key={course.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', borderBottom: idx !== 2 ? '1px solid var(--glass-border)' : 'none' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <BookOpen color="var(--primary-color)" size={20} />
                      <span style={{ fontWeight: '500' }}>{course.name}</span>
                    </div>
                    <div style={{ display: 'flex', gap: '2rem', opacity: 0.8 }}>
                      <span>{course.grade}</span>
                      <span>{course.students} students</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      case 'papers':
        return (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
              <h2>Manage Papers & MCQs</h2>
            </div>
            <div className="glass-panel" style={{ padding: '2rem', marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Add New MCQ Paper</h3>
              <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '500px' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem' }}>Subject Grade</label>
                  <select className="glass-input" style={{ background: 'var(--bg-color)' }}>
                    <option>Grade 9</option>
                    <option>Grade 10</option>
                    <option>Grade 11</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem' }}>Paper Name</label>
                  <input type="text" className="glass-input" placeholder="e.g. Physics Mid-Term 2026" />
                </div>

                <div style={{ padding: '1rem', border: '1px dashed var(--glass-border)', borderRadius: '8px' }}>
                  <h4 style={{ marginBottom: '1rem' }}>Add Question Manually</h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <textarea className="glass-input" placeholder="Enter question text here..." rows="3"></textarea>
                    <input type="text" className="glass-input" placeholder="Option A" />
                    <input type="text" className="glass-input" placeholder="Option B" />
                    <input type="text" className="glass-input" placeholder="Option C" />
                    <input type="text" className="glass-input" placeholder="Option D" />
                    <select className="glass-input" style={{ background: 'var(--bg-color)' }}>
                      <option>Select Correct Answer...</option>
                      <option>Option A</option>
                      <option>Option B</option>
                      <option>Option C</option>
                      <option>Option D</option>
                    </select>
                    <button type="button" className="glass-btn" style={{ width: 'fit-content' }}>+ Add Question</button>
                  </div>
                </div>

                <div style={{ textAlign: 'center', opacity: 0.6 }}>- OR -</div>

                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem' }}>Upload Questions Bulk (JSON/CSV)</label>
                  <input type="file" className="glass-input" style={{ padding: '0.5rem' }} />
                </div>
                <button type="button" className="glass-btn" style={{ background: 'var(--primary-color)', width: 'fit-content' }}>Save Paper</button>
              </form>
            </div>
          </div>
        );
      case 'time':
        return (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
              <h2>Manage MCQ Timing</h2>
            </div>
            <div className="glass-panel" style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Set Default Time Limits</h3>
              <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '400px' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem' }}>Time per Paper (Minutes)</label>
                  <input type="number" className="glass-input" defaultValue={10} />
                </div>
                <button type="button" className="glass-btn" style={{ background: '#22c55e', borderColor: '#22c55e', width: 'fit-content' }}>Update Time Limit</button>
              </form>
            </div>
          </div>
        );
      case 'teachers':
        return (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
              <h2>Manage Teachers Panel</h2>
            </div>
            <div className="glass-panel" style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Add Teacher Profile</h3>
              <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '500px' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem' }}>Teacher Full Name</label>
                  <input type="text" className="glass-input" placeholder="e.g. Dr. John Smith" />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem' }}>Subject Specialized</label>
                  <input type="text" className="glass-input" placeholder="e.g. Mathematics" />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem' }}>Upload Teacher Photo</label>
                  <input type="file" accept="image/*" className="glass-input" style={{ padding: '0.5rem' }} />
                </div>
                <button type="button" className="glass-btn" style={{ background: 'var(--primary-color)', width: 'fit-content' }}>Add to Network</button>
              </form>
            </div>
          </div>
        );
      default:
        return <div>Select a tab</div>;
    }
  };

  if (!isAdminLoggedIn) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', flexDirection: 'column' }}>
        <div className="glass-panel" style={{ padding: '3rem', width: '100%', maxWidth: '400px', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <h1 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '1rem' }}>Admin Dashboard</h1>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem' }}>Username</label>
            <input type="text" className="glass-input" placeholder="admin" />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem' }}>Password</label>
            <input type="password" className="glass-input" placeholder="••••••••" />
          </div>
          <button type="button" onClick={() => setIsAdminLoggedIn(true)} className="glass-btn" style={{ background: 'var(--primary-color)', width: '100%', marginTop: '1rem' }}>
            Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', minHeight: 'caLc(100vh - 80px)', paddingTop: '80px' }}>
      <aside className="glass-panel" style={{ width: '280px', margin: '2rem 1rem 2rem 2rem', display: 'flex', flexDirection: 'column', borderRadius: '16px' }}>
        <div style={{ padding: '2rem 1.5rem', flex: 1 }}>
          <h3 style={{ marginBottom: '2rem', opacity: 0.7, fontSize: '0.9rem', textTransform: 'uppercase' }}>Admin Menu</h3>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {sidebarItems.map(item => {
              const isActive = activeTab === item.id;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => setActiveTab(item.id)}
                    style={{
                      width: '100%', display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', borderRadius: '8px',
                      background: isActive ? 'rgba(59, 130, 246, 0.2)' : 'transparent',
                      color: isActive ? 'var(--primary-color)' : 'var(--text-color)',
                      border: 'none', cursor: 'pointer', fontSize: '1rem', transition: 'all 0.2s', textAlign: 'left'
                    }}
                  >
                    {item.icon}
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
        <div style={{ padding: '1.5rem', borderTop: '1px solid var(--glass-border)' }}>
          <button style={{ width: '100%', display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', background: 'transparent', border: 'none', color: '#ef4444', cursor: 'pointer' }}
            onClick={() => setIsAdminLoggedIn(false)}
          >
            <LogOut size={20} /> Logout
          </button>
        </div>
      </aside>
      <main style={{ flex: 1, padding: '2rem 2rem 2rem 1rem' }}>
        <div className="glass-panel" style={{ minHeight: '100%', padding: '3rem' }}>
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default AdminPanel;
