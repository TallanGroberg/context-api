import React from 'react';
import { Header, Container, } from 'semantic-ui-react';
import { Route, Switch, } from 'react-router-dom';

import Home from './component/Home';
import Navbar from './component/Navbar'
import UserProfile from './component/UserProfile'
import NoMatch from './component/NoMatch'



const App = () => (
  <>
      <Navbar />
    <Container style={{ marginTop: "25px"}}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/user-profile" component={UserProfile} />
        <Route component={NoMatch} />
      </Switch>

    </Container>

  </>
)



export default App;
