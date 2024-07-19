import React from 'react';

const TextField = ({ value, onChange }) => (
  <input
    type="text"
    value={value}
    onChange={onChange}
    placeholder="Type your answer here"
  />
);

export default TextField;
