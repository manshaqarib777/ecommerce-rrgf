import React from 'react';
import { Switch,Route } from 'react-router-dom';
import { Homepage, Registration } from './pages';
import { MainLayout,HomepageLayout } from './layouts';
import './default.scss';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render = {()=>(
          <HomepageLayout>
            <Homepage />
          </HomepageLayout>
        )} />
        <Route exact path="/registration" render = {()=>(
          <MainLayout>
            <Registration />
          </MainLayout>
        )} />
      </Switch>
    </div>
  );
}

export default App;
