import React, { Fragment } from 'react';
import { Container } from 'reactstrap';

import NavBar from '../../components/Navbar';

const MainLayout = props => (
  <Fragment>
    <NavBar title={'Weather Condition'} color={'primary'} />
    <Container>{props.children}</Container>
  </Fragment>
);

export default MainLayout;
