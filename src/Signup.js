import { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "./AuthContext";

const Signup = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();


    const handleSubmit = async (e) => {
        e.preventDefault();


        if (passwordRef.current.value !== passwordConfirmRef.current.value){
            return setError('Passwords do no match');
        }


        try {
            setError('');
            setLoading(true);
            await signup(emailRef.current.value, passwordRef.current.value)
            history.push('/')
        } catch {
            setError('Failed to create an account')
        }
        setLoading(false);
        
    }


    return (
        <div className="signup">
            <h2>Signup</h2>
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
                <label>Password Confirmation</label>
                <input type="password" ref={passwordConfirmRef} required />
                <button disabled={loading}>Sign Up</button>
            </form>
            <h3>Already have an account? <Link to="/login">Log In</Link></h3>
        </div>
    );
}

export default Signup;