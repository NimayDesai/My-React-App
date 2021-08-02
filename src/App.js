import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Privacy from './Privacy';
import Help from './Help';
import NotFound from './NotFound';
import Create from './Create';
import BlogDetails from './BlogDetails';
import Signup from './Signup';
import { AuthProvider } from './AuthContext';
import Dashboard from './Dashboard';
import Login from './Login';
import PrivateRoute from './PrivateRoute';
import ForgotPassword from './ForgotPassword';

function App() {
    return (
        <Router>
            <AuthProvider>
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
                            <Route path="/help">
                                <Help />
                            </Route>
                            <Route path="/create">
                                <Create />
                            </Route>
                            <PrivateRoute path="/dashboard" component={Dashboard} />
                            <Route path="/signup">
                                <Signup />
                            </Route>
                            <Route path="/login">
                                <Login />
                            </Route>
                            <Route path="/forgot-password">
                                <ForgotPassword />
                            </Route>
                            <Route path="/blogs/:id">
                                <BlogDetails />
                            </Route>
                            <Route path="*">
                                <NotFound />
                            </Route>
                        </Switch>
                    </div>
                </div>
            </AuthProvider>
        </Router>

    );
}

export default App;
