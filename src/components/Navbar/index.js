import React from 'react';
import { Navbar } from 'reactstrap';

import Icon from '../Icon';
import RouterLink from '../Link';

const NavBar = ({ color, title }) => {
  return (
    <Navbar color={color} light expand="md">
      <RouterLink className={'navbar-brand'} to={'/'}>
        <Icon className="fa fa-cloud" /> {title}
      </RouterLink>
    </Navbar>
  );
};

export default NavBar;
