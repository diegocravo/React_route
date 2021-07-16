import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Contacts from '../pages/Contacts';
import Home from '../pages/Home';
import Products from '../pages/Products';
import Whoweare from '../pages/Whoweare';
import Navbar from '../components/Navbar';

function Routes() {
  return (
      <div>
          <Navbar />
          <Switch>
              <Route path="/contacts" component={Contacts} />
              <Route path="/whoweare" component={Whoweare} />
              <Route path="/Products" component={Products} />
              <Route path="/" component={Home} />
          </Switch>
      </div>
  );
}

export default Routes;