import React from 'react';
import { Header, } from 'semantic-ui-react';
import User from './User'
import UserForm from './UserForm'


const UserProfile = () => (
  <>
  <Header as="h1">Welcome to your profile</Header>
  <User />
  <UserForm />

  </>
)


export default UserProfile;
