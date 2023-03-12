import { useState } from 'react';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const toggleCartHandler = () => {
    setCartIsShown((state) => {
      return state ? false : true
    });
  }
  return (
    <>
      {cartIsShown && <Cart toggleCartHandler={toggleCartHandler} />}
      <Header toggleCartHandler={toggleCartHandler} />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
