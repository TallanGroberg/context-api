import React from 'react';
import { Form, } from 'semantic-ui-react';


class AccountForm extends React.Component {
  state = {
    user: [
     {firstName: 'butt', lastName: 'face', avatar: 'img', }
    ]
  }

  handleSubmit = (e) => {
    e.preventDefault();

  }

  render() {
    return (

      <Form onSubmit={this.handleSubmit}>
        <Form.Group>

        <Form.Input />
        <Form.Input />
        <Form.Input />


        </Form.Group>
        <Form.Button color="blue">Save</Form.Button>

      </Form>

    )
  }

}


export default AccountForm;
