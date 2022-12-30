import { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Context from '../../store/Context';
import classes from './MainNavigation.module.css';

const MainNavigation = () => {
     const history = useHistory()

  const abc = useContext(Context)
  const logoutHandler = () => {
    abc.removeToken()
    history.replace('/auth')
  }

  return (
    <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          { !abc.navState &&
          <li>
            <Link to='/auth'>Login</Link>
          </li>
          }

          {abc.navState && <li><Link to='/profile'>Profile</Link></li>}

          {abc.navState && <li><button onClick={logoutHandler}>Logout</button></li>}

        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
