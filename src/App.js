
import { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import Context from './store/Context';
import ContextProvider from './store/ContextProvider';

function App() {
  const abc = useContext(Context)
  return (
    <ContextProvider>
    <Layout>
      <Switch>
        <Route path='/' exact>
          <HomePage />
        </Route>

        {!abc.navState && (
        <Route path='/auth'>
          <AuthPage />
        </Route>
        )}
       
        <Route path='/profile' ex>
         {!abc.navState && <UserProfile />  }    
         {abc.navState &&  <Redirect to='/auth'/> }    
        </Route>
       

       <Route path="*">
        <Redirect to='/'/>
       </Route>
       {/* redirect provide by router which redirect accourding path */}

      </Switch>
    </Layout>
    </ContextProvider>
  );
}

export default App;
