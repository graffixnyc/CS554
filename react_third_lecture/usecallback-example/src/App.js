import React, { useState, useCallback } from 'react';
import './App.css';

function App() {
  const [username, setUserName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const updateUsername = useCallback(() => {
		console.log ("Update username created")
    setUserName('graffixnyc');
  }, [setUserName]);

  const updateFirstName = useCallback(() => {
		console.log ("Update firstname created")
    setFirstName('Patrick');
  }, [setFirstName]);

  const updateLastName = useCallback(() => {
		console.log ("Update lastname created")
    setLastName('Hill');
  }, [setLastName]);

  return (
    <div className="App">
      <div>
        {username}
        <br />
        {firstName}
        <br />
        {lastName}
        <br />
      </div>
      <button onClick={updateUsername}>Set Username</button>
      <button onClick={updateFirstName}>Set First Name</button>
      <button onClick={updateLastName}>Set Last Name</button>
    </div>
  );
}

export default App;
