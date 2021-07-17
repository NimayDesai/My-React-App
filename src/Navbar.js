import { Link } from "react-router-dom";

const Navbar = () => {
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
                <Link to="https://github.com/PaladinAOE2/My-React-App" style={{
                    color: "white",
                    backgroundColor: "#a3be8c",
                    borderRadius: '8px'
                }}>Source Code</Link>
            </div>
        </nav>
    );
}
export default Navbar;
