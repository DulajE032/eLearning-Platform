import { useState } from 'react';
import { LayoutDashboard, FileText, Video, Users, LogOut, Settings } from 'lucide-react';

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const sidebarItems = [
    { id: 'overview', label: 'Overview', icon: <LayoutDashboard size={20} /> },
    { id: 'papers', label: 'Manage Papers/MCQs', icon: <FileText size={20} /> },
    { id: 'videos', label: 'Manage Videos', icon: <Video size={20} /> },
    { id: 'employees', label: 'Manage Employees', icon: <Users size={20} /> },
  ];

  const renderContent = () => {
    switch(activeTab) {
      case 'overview':
        return (
          <div>
            <h2 style={{ marginBottom: '2rem' }}>Platform Overview</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
              <div className="glass-panel" style={{ padding: '2rem', textAlign: 'center' }}>
                <h3 style={{ fontSize: '2rem', color: 'var(--primary-color)' }}>1,248</h3>
                <p>Active Students</p>
              </div>
              <div className="glass-panel" style={{ padding: '2rem', textAlign: 'center' }}>
                <h3 style={{ fontSize: '2rem', color: 'var(--primary-color)' }}>45</h3>
                <p>Published Papers</p>
              </div>
              <div className="glass-panel" style={{ padding: '2rem', textAlign: 'center' }}>
                <h3 style={{ fontSize: '2rem', color: 'var(--primary-color)' }}>12</h3>
                <p>Video Lectures</p>
              </div>
              <div className="glass-panel" style={{ padding: '2rem', textAlign: 'center' }}>
                <h3 style={{ fontSize: '2rem', color: 'var(--primary-color)' }}>5</h3>
                <p>Staff Members</p>
              </div>
            </div>
          </div>
        );
      case 'papers':
        return (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
              <h2>Manage Papers & MCQs</h2>
              <button className="glass-btn" style={{ background: 'var(--primary-color)' }}>+ Add New Paper</button>
            </div>
            <div className="glass-panel" style={{ padding: '2rem' }}>
              <p style={{ opacity: 0.8 }}>List of uploaded papers will appear here. Admins can edit, delete, or add new questions.</p>
            </div>
          </div>
        );
      case 'videos':
        return (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
              <h2>Manage Video Lectures</h2>
              <button className="glass-btn" style={{ background: 'var(--primary-color)' }}>+ Upload Video</button>
            </div>
            <div className="glass-panel" style={{ padding: '2rem' }}>
              <p style={{ opacity: 0.8 }}>Manage your video resources for students. Generate links or embed directly.</p>
            </div>
          </div>
        );
      case 'employees':
        return (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
              <h2>Manage Employees</h2>
              <button className="glass-btn" style={{ background: 'var(--primary-color)' }}>+ Add Staff</button>
            </div>
            <div className="glass-panel" style={{ padding: '2rem' }}>
              <p style={{ opacity: 0.8 }}>Control roles and permissions for other instructors or moderators.</p>
            </div>
          </div>
        );
      default:
        return <div>Select a tab</div>;
    }
  };

  return (
    <div style={{ display: 'flex', minHeight: 'caLc(100vh - 80px)', paddingTop: '80px' }}>
      
      {/* Sidebar */}
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
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      padding: '1rem',
                      borderRadius: '8px',
                      background: isActive ? 'rgba(59, 130, 246, 0.2)' : 'transparent',
                      color: isActive ? 'var(--primary-color)' : 'var(--text-color)',
                      border: 'none',
                      cursor: 'pointer',
                      fontSize: '1rem',
                      transition: 'all 0.2s',
                      textAlign: 'left'
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
        
        {/* Bottom controls */}
        <div style={{ padding: '1.5rem', borderTop: '1px solid var(--glass-border)' }}>
          <button style={{ width: '100%', display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', background: 'transparent', border: 'none', color: 'var(--text-color)', cursor: 'pointer' }}>
            <Settings size={20} /> Settings
          </button>
          <button style={{ width: '100%', display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', background: 'transparent', border: 'none', color: '#ef4444', cursor: 'pointer' }}>
            <LogOut size={20} /> Logout
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main style={{ flex: 1, padding: '2rem 2rem 2rem 1rem' }}>
        <div className="glass-panel" style={{ minHeight: '100%', padding: '3rem' }}>
          {renderContent()}
        </div>
      </main>

    </div>
  );
};

export default AdminPanel;
