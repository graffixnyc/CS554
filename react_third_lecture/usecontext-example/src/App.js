import React, { useState } from 'react';
import './App.css';
import ThemeContext from './ThemeContext';
import ChildComponent from './ChildComponent';
function App() {
	const [ theme, setTheme ] = useState({ color: 'red', fontWeight: 'normal' });

	const toggleTheme = () => {
		if (theme.color === 'red') {
			setTheme({ color: 'green', fontWeight: 'bold' });
		} else {
			setTheme({ color: 'red', fontWeight: 'normal' });
		}
	};
	return (
		<div className='App'>
			<ThemeContext.Provider value={theme}>
				<ChildComponent />
			</ThemeContext.Provider>

			<button onClick={toggleTheme}>Toggle Theme </button>
		</div>
	);
}

export default App;
