import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "./AuthContext";

const Dashboard = () => {
    const [error, setError] = useState('');
    const { currentUser, logout} = useAuth();
    const history = useHistory();

    const handleLogout = async () => {
        setError('');



        try {
            await logout();
            history.push('/login');
        } catch {
            setError('Failed to log out');
        }
    }

    return (
        <div>
            <h2>Profile</h2>
            {error && <h2 style={{
                backgroundColor: 'red',
                padding: '5px',
                borderRadius: '5px',
                color: 'white'
            }}>{error}</h2>}
            <strong>Email:</strong> {currentUser.email}
            <Link to="/update-profile">Update Profile</Link>
            <button onClick={handleLogout}>Log Out</button>
        </div>
    );
}

export default Dashboard;