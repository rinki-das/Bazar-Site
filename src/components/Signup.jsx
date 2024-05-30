import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import './signup.css';

const SignUpForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [agreeTerms, setAgreeTerms] = useState(false);
    const [error, setError] = useState('');

    const togglePasswordVisibility = (field) => {
        if (field === 'password') {
            setShowPassword(!showPassword);
        } else if (field === 'confirmPassword') {
            setShowConfirmPassword(!showConfirmPassword);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validation logic
        if (!fullName || !email || !mobileNumber || !password || !confirmPassword || !agreeTerms) {
            setError('Please fill in all fields and agree to the terms.');
            return;
        }
        if (!email.includes('@gmail.com')) {
            setError('Please provide a valid Gmail address.');
            return;
        }
        if (!/^\d{10}$/.test(mobileNumber)) {
            setError('Please provide a 10-digit mobile number.');
            return;
        }
        if (password !== confirmPassword) {
            setError('Password and confirm password do not match.');
            return;
        }

        try {
            const response = await fetch('/api/users/signup', { // Updated endpoint to match backend route
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    fullName,
                    email,
                    mobileNumber,
                    password,
                    confirmPassword,
                   
                }),
            });
            const data = await response.json();
           
            if (response.ok) {
                alert('Successfully Registered');
                setError('');
            } else {
                alert(data.error);
                setError(data.error);
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setError('An error occurred while submitting the form.');
        }
    } 

    return (
        <div className="signup-form">
            <h2>Create Account</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input type="text" placeholder="Full Name" value={fullName} onChange={(e) => setFullName(e.target.value)} />
                </div>
                <div className="form-group">
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="form-group">
                    <input type="text" placeholder="Mobile number" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} />
                </div>
                <div className="form-group password-input">
                    <input type={showPassword ? "text" : "password"} placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} onClick={() => togglePasswordVisibility('password')} />
                </div>
                <div className="form-group password-input">
                    <input type={showConfirmPassword ? "text" : "password"} placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                    <FontAwesomeIcon icon={showConfirmPassword ? faEye : faEyeSlash} onClick={() => togglePasswordVisibility('confirmPassword')} />
                </div>
                <div className="form-group">
                    <input type="checkbox" id="agreeTerms" name="agreeTerms" checked={agreeTerms} onChange={(e) => setAgreeTerms(e.target.checked)} />
                    <label htmlFor="agreeTerms" className="agree-terms-label">
                        By clicking Sign In or continue with Facebook or Google, you agree to all <a href="#" style={{ color: 'black' }}>Terms of Service</a> and <a href="#" style={{ color: 'black' }}>Privacy Policy</a>
                    </label>
                </div>
                <button type="submit">Sign up</button>
                {error && <p className="error-message">{error}</p>}
            </form>
            <div className="continue-with">
                <div className="line"></div>
                <div className="social-login">
                    <button>Facebook</button>
                    <button>Google</button>
                </div>
            </div>
            <p>Already have an account? <a href="/login">Login</a></p>
        </div>
    );
};

export default SignUpForm;
