import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Ads from './Ads';

function App() {
    return (
        <div className="App">
            <Navbar />
            <div className="content">
                <Home />
            </div>
            <div className="show-ads">
                <Ads />
            </div>
        </div>
    );
}

export default App;
