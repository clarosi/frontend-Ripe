import React from 'react';

const Icon = props => (
  <i aria-hidden="true" {...props}>
    {props.children}
  </i>
);

export default Icon;
