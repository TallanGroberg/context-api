import React from 'react';
import { Header, Container, } from 'semantic-ui-react';
import styled from 'styled-components';
import { Route, Switch, } from 'react-router-dom';

import Home from './component/Home';
import Navbar from './component/Navbar'
import UserProfile from './component/UserProfile'
import NoMatch from './component/NoMatch'



const App = () => (
  <>
  <Navbar styled={NavColor} />
    <AppContainer>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/user/profile" component={UserProfile} />
        <Route component={NoMatch} />
      </Switch>

    </AppContainer>
  </>

)

const AppContainer = styled.div`
    margin: 25px;

    background-color: rgb(247, 234, 250);

    `;

const NavColor = styled.div`


  background-color: rgb(247, 234, 250);

  `;




export default App;
