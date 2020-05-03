import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';
const ChildChildComponent = () => {
  const theme = useContext(ThemeContext);
  return <p style={theme}>Hello World Too!</p>;
};

export default ChildChildComponent;
