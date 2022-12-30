import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Context from '../../store/Context';
import classes from './MainNavigation.module.css';

const MainNavigation = () => {
     const abc = useContext(Context)
  const logoutHandler = () => {
  abc.removeToken()
  }

  return (
    <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          <li>
            <Link to='/auth'>Login</Link>
          </li>
          <li>
           {abc.navState  && <Link to='/profile'>Profile</Link>}
          </li>
          <li>
            {abc.navState  &&<button onClick={logoutHandler}>Logout</button>}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
