import React, { useState, useEffect } from 'react';
import firebaseApp from './firebase';

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
	const [ currentUser, setCurrentUser ] = useState(null);

	useEffect(() => {
		firebaseApp.auth().onAuthStateChanged(setCurrentUser);
	}, []);

	return <AuthContext.Provider value={{ currentUser }}>{children}</AuthContext.Provider>;
};
