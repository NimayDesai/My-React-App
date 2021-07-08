import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Privacy from './Privacy';


function App() {
    return (
        <Router>
        <div className="App">
            <Navbar />
            <div className="content">
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/privacy">
                        <Privacy />
                    </Route>
                </Switch>
            </div>
        </div>
        </Router>

    );
}

export default App;
// test