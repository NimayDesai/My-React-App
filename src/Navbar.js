import { Link } from "react-router-dom";
import { useAuth } from "./AuthContext";
// import { auth } from "./Firebase";


const Navbar = () => {
    // const user = auth.currentUser;
    const { currentUser, logout} = useAuth();

    const handleLogout = async () => {
        await logout();
    }

    return (
        <nav className="navbar">
            <Link to="/" style={{
                fontSize: 20
            }}>Home</Link>
            <Link to="/help" style={{
                fontSize: 20
            }}>Help</Link>
            <Link to="/ancient-history" style={{
                fontSize: 20
            }}>Ancient History</Link>
            <Link to="/medival-history" style={{
                fontSize: 20
            }}>Medival History</Link>
            <Link to="/early-modern-history" style={{
                fontSize: 20
            }}>Early Modern History</Link>
            <div className="links">
                {!currentUser && <Link to="/login" style={{
                    color: "white",
                    backgroundColor: "#a3be8c",
                    borderRadius: '8px',
                }}>Login</Link>}
                {currentUser && <button onClick={handleLogout} style={{
                    color: "white",
                    backgroundColor: "#a3be8c",
                    borderRadius: '8px',
                }}>Log out</button>}
            </div>
        </nav>
    );
}
export default Navbar;
