import React, { useEffect, useState } from 'react';

import Login from './components/Login/Login';
import Login2 from './components/Login/Login2';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem('isLoggedIn', '1');
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  useEffect(() => {
    const localStorageIsLoggedIn = localStorage.getItem('isLoggedIn');
    localStorageIsLoggedIn === '1' && setIsLoggedIn(true);
  }, [])
  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {/* {!isLoggedIn && <Login onLogin={loginHandler} />} */}
        {!isLoggedIn && <Login2 onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App;
