const Navbar = () => {
    return (
        <nav className="navbar">
            <a href="/" style={{
                fontSize: 20
            }}>Home</a>
            <a href="/help" style={{
                fontSize: 20
            }}>Help</a>
            <a href="/ancient-history" style={{
                fontSize: 20
            }}>Ancient History</a>
            <a href="/medival-history" style={{
                fontSize: 20
            }}>Medival History</a>
            <a href="/early-modern-history" style={{
                fontSize: 20
            }}>Early Modern History</a>
            <div className="links">
                <a href="https://github.com/PaladinAOE2/My-React-App" style={{
                    color: "white",
                    backgroundColor: "#a3be8c",
                    borderRadius: '8px'
                }}>Source Code</a>
            </div>
        </nav>
    );
}
export default Navbar;


