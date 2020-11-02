import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';
import ChildChildComponent from './ChildChildComponent';
const ChildComponent = () => {
  const [theme] = useContext(ThemeContext);
  return (
    <div>
      <p style={theme}>Hello World from the child</p>
      <ChildChildComponent />
    </div>
  );
};

export default ChildComponent;
