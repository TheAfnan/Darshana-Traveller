import React from 'react';

const App: React.FC = () => {
  React.useEffect(() => {
    console.log('✅ App loaded');
  }, []);

  return (
    <div style={{ 
      padding: '40px', 
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif',
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>🎉 DarShana</h1>
      <p style={{ fontSize: '20px', marginBottom: '30px' }}>Travel Platform Live!</p>
      <div style={{ background: 'rgba(255,255,255,0.1)', padding: '20px', borderRadius: '8px' }}>
        <p>✅ App is running</p>
        <p>🚀 Ready for deployment</p>
        <p style={{ marginTop: '20px', fontSize: '14px', opacity: 0.8 }}>
          If you see this, the app is working!
        </p>
      </div>
    </div>
  );
};

export default App;
