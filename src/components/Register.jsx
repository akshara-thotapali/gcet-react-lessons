// Register.jsx
import React, { useState, useContext } from 'react';
import { UserContext } from './App21';

function Register() {
    const { users, setUsers } = useContext(UserContext);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const trimmedName = name.trim();
        const trimmedEmail = email.trim().toLowerCase();
        const trimmedPassword = password.trim();

        // Check if email already exists
        const existingUser = users.find(u => u.email === trimmedEmail);
        if (existingUser) {
            alert('User already registered!');
            return;
        }

        setUsers([...users, { name: trimmedName, email: trimmedEmail, password: trimmedPassword }]);
        setName('');
        setEmail('');
        setPassword('');
        alert('User registered!');
        console.log('Users after register:', [...users, { name: trimmedName, email: trimmedEmail, password: trimmedPassword }]);
    };

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
                <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Register;
