import React from 'react';

import Layout from '../../hoc/Layout/main';
import Heading from '../../components/Heading';
import RouterLink from '../../components/Link';

const Home = props => (
  <Layout {...props}>
    <Heading className={'mt-3 mb-5'}>Home</Heading>
    <RouterLink to={'/weather'}>Current Weather</RouterLink>
  </Layout>
);

export default Home;
