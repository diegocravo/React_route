import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Contacts from '../pages/Contacts';
import Home from '../pages/Home';
import Products from '../pages/Products';
import Whoweare from '../pages/Whoweare';
import Login from '../pages/Login';
import Navbar from '../components/Navbar';
import { useToggle } from '../context/ToggleProvider';

function Routes() {

    const {isLoggedIn} = useToggle();

  return (
      <div>
          <Navbar />
              {!isLoggedIn &&
              <Switch>
                  <Route path="/Login" component={Login} />
                  <Route path="/" component={Home} />
              </Switch>
              }
              {isLoggedIn &&
              <Switch>
                  <Route path="/contacts" component={Contacts} />
                  <Route path="/whoweare" component={Whoweare} />
                  <Route path="/Products" component={Products} />
                  <Route path="/Login" component={Login} />
                  <Route path="/" component={Home} />
              </Switch>
              }   
      </div>
  );
}

export default Routes;