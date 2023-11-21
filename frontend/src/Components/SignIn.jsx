import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import '../Assets/SignIn.css';
import {Link, useNavigate} from "react-router-dom";

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const auth = getAuth();
    const navigate = useNavigate();

    const handleSignIn = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            // Redirect to the /recordaudio page after successful sign-up
            navigate('/recordaudio');
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="signInContainer">
            <form onSubmit={handleSignIn} className="signInForm">
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                />
                <button type="submit">Sign In</button>
                {error && <p>{error}</p>}
            </form>
            {/* TODO: Implement Voice Authentication Section */}
            <p className="signUpLink">Don't have an account? <Link to="/signup">Sign up</Link></p>
        </div>
    );
};

export default SignIn;