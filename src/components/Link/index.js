import React from 'react';
import { Link } from 'react-router-dom';

const RouterLink = props => <Link {...props}>{props.children}</Link>;

export default RouterLink;
