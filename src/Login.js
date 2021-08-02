import { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "./AuthContext";

const Login = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setError('');
            setLoading(true);
            await login(emailRef.current.value, passwordRef.current.value)
            history.push('/')
        } catch {
            setError('Failed to sign in')
        }
        setLoading(false);
        
    }


    return (
        <div className="signup">
            <h2>Log In</h2>
            {error && <h2 style={{
                backgroundColor: 'red',
                padding: '5px',
                borderRadius: '5px',
                color: 'white'
            }}>{error}</h2>}
            <form onSubmit={handleSubmit}>
                <label>Email</label>
                <input type="email" ref={emailRef} required />
                <label>Password</label>
                <input type="password" ref={passwordRef} required />
                <button disabled={loading}>Log In</button>
            </form>
            <div>
                <Link to="/forgot-password">Forgot Password?</Link>
            </div>
            <h3>Need an account <Link to="/signup">Sign Up</Link></h3>
        </div>
    );
}

export default Login;