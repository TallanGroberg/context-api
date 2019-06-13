import React from 'react';
import { Card, } from 'semantic-ui-react';
import { UserConsumer, } from '../provider/UserProvider';


const User = () => (

<UserConsumer>
  {value => (

  <Card>

  <Card.Content>
    <Card.Header> Your User Information </Card.Header>

      <Card.Meta>
        Date Joined: ?{value.dateJoined}
      </Card.Meta>

      <Card.Meta>
        First Name: {value.firstName}
      </Card.Meta>

      <Card.Meta>
        Last Name: {value.lastName}
      </Card.Meta>

      <Card.Meta>
        Avatar: {value.avatar}
      </Card.Meta>

  </Card.Content>

  <Card.Content>
    <p> Membership Level: membershipLevel</p>
  </Card.Content>

  </Card>

)}
</UserConsumer>
);

export default User;
