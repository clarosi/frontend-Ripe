import React from 'react';

import Layout from '../../hoc/Layout/main';
import Heading from '../../components/Heading';

const NotFound = props => (
  <Layout {...props}>
    <Heading className={'mt-3'}>Page Not Found.</Heading>
  </Layout>
);

export default NotFound;
