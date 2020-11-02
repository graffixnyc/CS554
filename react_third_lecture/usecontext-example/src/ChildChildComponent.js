import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

const ChildChildComponent = () => {
  const [theme, setTheme] = useContext(ThemeContext);
	return (
	
	<div><p style={theme}>Hello World from the child's child!</p>
		
		<button onClick={()=> setTheme({color: 'purple', fontWeight: 'bold'})}>Set context from child's child</button>
		</div>
		
		);
	
};

export default ChildChildComponent;
