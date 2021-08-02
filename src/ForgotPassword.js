import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "./AuthContext";

const Login = () => {
    const emailRef = useRef()
    const { resetPassword } = useAuth();
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setMessage('');
            setError('');
            setLoading(true);
            await resetPassword(emailRef.current.value);
            setMessage('Check your inbox for further instructions');
        } catch {
            setError('Failed to reset password')
        }
        setLoading(false);
        
    }


    return (
        <div className="signup">
            <h2>Password Reset</h2>
            {error && <h2 style={{
                backgroundColor: 'red',
                padding: '5px',
                borderRadius: '5px',
                color: 'white'
            }}>{error}</h2>}
            {message && <h2 style={{
                backgroundColor: '#a3be8c',
                padding: '5px',
                borderRadius: '5px',
                color: 'white'
            }}>{message}</h2>}
            <form onSubmit={handleSubmit}>
                <label>Email</label>
                <input type="email" ref={emailRef} required />
                <button disabled={loading}>Reset Password</button>
            </form>
            <div>
                <Link to="/login">Login</Link>
            </div>
            <h3>Need an account <Link to="/signup">Sign Up</Link></h3>
        </div>
    );
}

export default Login;