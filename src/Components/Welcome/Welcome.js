import React from 'react';
import { Link } from 'react-router-dom';
import './Welcome.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const LoggedInGreeting = ({ isLoggedIn }) => {
    return <h1>Welcome Guest User!</h1>;
}

const NotLoggedInGreeting = ({ isLoggedIn }) => {
    return <h1>Welcome! Please login.</h1>;
}

// Conditional rendering
const Greeting = ({ isLoggedIn }) => {
    if (isLoggedIn) {
        return <LoggedInGreeting />
    }
    return <NotLoggedInGreeting />
}

const LoginButton = ({ handleLogin }) => {
    return (
        <button className="welcome-btn" onClick={handleLogin}>Login</button>
    )
}

const LogoutButton = ({ handleLogout }) => {
    return (
        <button className="welcome-btn" onClick={handleLogout}>Logout</button>
    )
}

const Welcome = ({ isLoggedIn, loginFalseHandler, loginTrueHandler }) => {
    let button;

    const handleLogin = () => {
        loginTrueHandler();
    }

    const handleLogout = () => {
        loginFalseHandler();
    }

    // conditional rendering and passing props to Component
    if (isLoggedIn) {
        button = <LogoutButton handleLogout={handleLogout} />;
    } else {
        button = <LoginButton handleLogin={handleLogin} />;
    }

    return (
        <div className="Welcome">
            <div className="welcome-content">
                {/* passing props */}
                <Greeting isLoggedIn={isLoggedIn} />
                {button}
                {isLoggedIn && <Link to="/posts"><button className="welcome-btn">Read Blogposts</button></Link>}
            </div>
        </div>
    );
};

export default Welcome;
