// Login.jsx
import React, { useState, useContext } from 'react';
import { UserContext } from './App21';

function Login() {
    const { users } = useContext(UserContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const trimmedEmail = email.trim().toLowerCase();
        const trimmedPassword = password.trim();

        console.log('Current users:', users);

        const user = users.find(
            (u) => u.email === trimmedEmail && u.password === trimmedPassword
        );

        if (user) {
            setMessage(`Welcome ${user.name}`);
        } else {
            setMessage('Invalid credentials');
        }

        setEmail('');
        setPassword('');
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
                <button type="submit">Submit</button>
            </form>
            <p>{message}</p>
        </div>
    );
}

export default Login;
