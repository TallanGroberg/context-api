import React from 'react';
import { Header, } from 'semantic-ui-react';
import Account from './Account'
import AccountForm from './AccountForm'


const UserProfile = () => (
  <>
  <Header as="h1">Welcome to your profile</Header>
  <Account />
  <AccountForm />

  </>
)


export default UserProfile;
