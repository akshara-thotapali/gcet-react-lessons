import React, { useState, useEffect } from 'react';
import Register from './Register';
import Login from './Login';

export const UserContext = React.createContext();

function App21() {
    const [users, setUsers] = useState(() => {
        const savedUsers = localStorage.getItem('users');
        return savedUsers ? JSON.parse(savedUsers) : [];
    });

    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(users));
    }, [users]);

    return (
        <UserContext.Provider value={{ users, setUsers }}>
            <div>
                <h1>User App</h1>
                <Register />
                <Login />
            </div>
        </UserContext.Provider>
    );
}

export default App21;
