import { useState } from 'react';
import Login from '../src/pages/Login';
import Register from '../src/pages/Register';
import Home from '../src/pages/Home';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  return (
    <>
      {isAuthenticated ? (
        <Home />
      ) : showRegister ? (
        <Register onLoginSuccess={handleLoginSuccess} onSwitch={() => setShowRegister(false)} />
      ) : (
        <Login onLoginSuccess={handleLoginSuccess} onSwitch={() => setShowRegister(true)} />
      )}
    </>
  );
};

export default App;
