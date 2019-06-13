import React from 'react';
import { Form, } from 'semantic-ui-react';


class UserForm extends React.Component {
  state = {
    user: [
     {firstName: 'butt', lastName: 'face', avatar: 'img', memebershipOptions: 'gold' },
     {firstName: '', lastName: '', avatar: '', },
    ]
  }

  handleSubmit = (e) => {
    e.preventDefault();
  }

  handleChange = (e, { name, value}) => this.setState( { [name]: value, });

  render() {
    const { firstName, lastName, avatar, } = this.state;
    return (

      <Form onSubmit={this.handleSubmit}>
        <Form.Group>

        <Form.Input
        label="first name"
        name="firstName"
        value={firstName}
        onChange={this.handleChange}
         />
        <Form.Input
        label="Last Name"
        name="lastName"
        value={lastName}
        onChange={this.handleChange}
         />
        <Form.Input
        label="Avatar"
        name="avatar"
        value={avatar}
        onChange={this.handleChange}
         />

         <Form.Select
         label="membership options"
         name="membership"
         value={membershipOptions}
         onchange={this.handleChange}
         options={membershipOptions}
          />


        </Form.Group>
        <Form.Button color="blue">Save</Form.Button>
      </Form>
    )
  }

}
  const membershipOptions =  [
    { key: "b", text: "Bronze", value: "Bronze", },
    { key: "s", text: "Silver", value: "Silver", },
    { key: "g", text: "Gold", value: "Gold", },
  ]


export default UserForm;
