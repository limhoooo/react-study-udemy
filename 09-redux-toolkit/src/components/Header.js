import classes from './Header.module.css';
import { useDispatch } from 'react-redux';
import { authAction } from './../store/auth-slice';

const Header = () => {
  const dispatch = useDispatch();
  const logoutFnc = () => {
    dispatch(authAction.login(false))
  }
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick={logoutFnc}>Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
