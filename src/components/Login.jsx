import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const [emailOrMobile, setEmailOrMobile] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3000/api/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ emailOrMobile, password }),
            });

            const data = await response.json();

            if (response.ok) {
                setError('');
                localStorage.setItem('token', data.token);
                localStorage.setItem('userData', JSON.stringify(data.user));
                console.log('User data passed to edit profile:', data.user); // Add this line for debugging
                navigate('/edit', { state: { user: data.user, token: data.token } });
                toast.success('Login successful');
            
            
            } else {
                setError(data.error || 'An error occurred while logging in. Please try again.');
            }
        } catch (error) {
            setError('An error occurred while logging in. Please try again.');
        }
    };

    return (
        <div className="login-form">
            <h2>Sign In</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="Email or mobile number"
                        value={emailOrMobile}
                        onChange={(e) => setEmailOrMobile(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="remember-forgot">
                    <div>
                        <input type="checkbox" id="rememberMe" name="rememberMe" />
                        <label htmlFor="rememberMe">Remember me</label>
                    </div>
                    <div className="forgot-password">
                        <a href="#">Forgot Password?</a>
                    </div>
                </div>
                <button type="submit">Sign In</button>
                {error && <p className="error-message">{error}</p>}
            </form>
            <div className="continue-with">
                <div className="line"></div>
                <div className="social-login">
                    <button>Facebook</button>
                    <button>Google</button>
                </div>
            </div>
            <p>
                Don't have an account? <a href="/signup" className="create-account-link">Create Account</a>
            </p>
        </div>
    );
};

export default Login;