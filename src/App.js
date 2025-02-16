import './App.css';
import Dock from './components/Dock/Dock';
import Logo from './images/Logo.svg';
import SplitText from './components/SplitText/SplitText';
import orangeLine from './images/orangeLine.svg';

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

  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };

  return (
    <div className="App animated-grid">
      <div className="logo-container">
        <img src={Logo} alt="Logo" />
      </div>
      <Dock 
        items={items}
        panelHeight={40}
        baseItemSize={40}
        magnification={50}
        className="main-dock"
      />
      <div className="page-content">
        <h1 className="hero-text">
          <span className="line">
            <SplitText
              text="We help you"
              delay={100}
              animationFrom={{ opacity: 0, y: 50 }}
              animationTo={{ opacity: 1, y: 0 }}
              onLetterAnimationComplete={handleAnimationComplete}
            />
          </span>
          <span className="line">
            <SplitText
              text="build "
              delay={100}
              animationFrom={{ opacity: 0, y: 50 }}
              animationTo={{ opacity: 1, y: 0 }}
            />
            <span className="highlight">
              <SplitText
                text="timeless"
                delay={100}
                animationFrom={{ opacity: 0, y: 50 }}
                animationTo={{ opacity: 1, y: 0 }}
              />
              <img src={orangeLine} alt="" className="orange-line" />
            </span>
          </span>
          <span className="line">
            <SplitText
              text="brands."
              delay={100}
              animationFrom={{ opacity: 0, y: 50 }}
              animationTo={{ opacity: 1, y: 0 }}
            />
          </span>
        </h1>
      </div>
    </div>
  );
}

export default App;
