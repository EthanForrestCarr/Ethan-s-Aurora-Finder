import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const LoginPage: React.FC = () => {
    const { login, register } = useAuth();
    const [isRegistering, setIsRegistering] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const navigate = useNavigate();

    const handleAuth = async () => {
        if (!validateEmail(email)) {
            setEmailError("Please enter a valid email address.");
            return;
        }
        setEmailError('');

        try {
            if (isRegistering) {
                await register(name, email, password);
            } else {
                await login(email, password);
            }
            navigate('/home');
        } catch (error) {
            console.error("Authentication error:", error);
        }
    };

    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    return (
        <div>
            <h1>{isRegistering ? "Register" : "Login"}</h1>
            {isRegistering && (
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            )}
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={() => {
                    if (!validateEmail(email)) {
                        setEmailError("Please enter a valid email address.");
                    } else {
                        setEmailError('');
                    }
                }}
            />
            {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleAuth}>{isRegistering ? "Register" : "Login"}</button>
            <button onClick={() => setIsRegistering(!isRegistering)}>
                {isRegistering ? "Switch to Login" : "Switch to Register"}
            </button>
        </div>
    );
};

export default LoginPage;