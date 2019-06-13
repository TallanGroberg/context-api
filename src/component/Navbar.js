import React from 'react';
import { Menu, } from 'semantic-ui-react'
import { NavLink, } from 'react-router-dom'

const Navbar = () => (
  <Menu>
    <NavLink to="/">
      <Menu.Item>
      Home
      </Menu.Item>
    </NavLink>

    <NavLink to="/user/profile">
      <Menu.Item>
      User Profile
      {/* wil be replaced with name */}
      </Menu.Item>
    </NavLink>
  </Menu>
);

export default Navbar;
