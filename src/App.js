import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { ROUTES } from './utils/utils';

import Login from './components/LoginForm/LoginForm';
import ProfileContainer from './components/ProfileContainer/ProfileContainer';


const App = () => (

  <BrowserRouter>
    <div className="app-wrapper">
      <Route path={ROUTES.LOGIN} component={() => <Login />} />
      <Route path={ROUTES.PROFILE} component={() => <ProfileContainer />} />
      <Redirect to={ROUTES.LOGIN} />
    </div>
  </BrowserRouter>
);

export default App;
