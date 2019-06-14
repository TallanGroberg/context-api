import React from 'react';
import { Form, } from 'semantic-ui-react';
import { UserConsumer, } from "../provider/UserProvider"


class UserForm extends React.Component {
  state =
     { firstName: this.props.firstName, lastName: this.props.lastName,
       avatar: this.props.avatar,  }


  handleSubmit = (e) => {
    e.preventDefault();
    this.props.updateUser({ ...this.state, })
  }

  handleChange = (name) => (e) => (
    this.setState({...this.state, [name]: e.target.value})
  )


  render() {
    const { firstName, lastName, avatar, membershipOptions } = this.state;
    return (

      <Form onSubmit={this.handleSubmit}>
        <Form.Group>

        <Form.Input
        label="first name"
        value={firstName}
        onChange={this.handleChange('firstName')}
         />
        <Form.Input
        label="Last Name"
        name="lastName"
        value={lastName}
        onChange={this.handleChange('lastName')}
         />
        <Form.Input
        label="Avatar"
        name="avatar"
        value={avatar}
        placeholder="an image should go here"
        onChange={this.handleChange('avatar')}
         />

        </Form.Group>
        <Form.Button color="blue">Save</Form.Button>
      </Form>
    )
  }

}

  const ConnectedUserForm = (props) => {
    return (
      <UserConsumer>
      { value => (
      <UserForm
        {...props }
        firstName={value.firstName}
        lastName={value.lastName}
        avatar={value.avatar}
        membershipOptions={value.membershipOptions}
        updateUser={value.updateUser}
        />
      )}
        </UserConsumer>
    )
  }


export default ConnectedUserForm;
