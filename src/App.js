import './App.css';
import Dock from './components/Dock/Dock';

function App() {
  // Get current path to determine active page
  const currentPath = window.location.pathname;

  const items = [
    { 
      icon: 'Home', 
      label: 'Home', 
      onClick: () => window.location.href = '/',
      className: currentPath === '/' ? 'active' : ''
    },
    { 
      icon: 'Services', 
      label: 'Services', 
      onClick: () => window.location.href = '/services',
      className: currentPath === '/services' ? 'active' : ''
    },
    { 
      icon: 'About Us', 
      label: 'About Us', 
      onClick: () => window.location.href = '/about',
      className: currentPath === '/about' ? 'active' : ''
    },
    { 
      icon: 'Contact Us', 
      label: 'Contact Us', 
      onClick: () => window.location.href = '/contact',
      className: currentPath === '/contact' ? 'active' : ''
    },
  ];

  return (
    <div className="App animated-grid">
      <Dock 
        items={items}
        panelHeight={40}
        baseItemSize={40}
        magnification={50}
        className="main-dock"
      />
    </div>
  );
}

export default App;
