import React from 'react';
import { Link } from 'react-router-dom'; 
import './Welcome.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


const Welcome = () => {
    return (
        <div className="Welcome">
        <div className="welcome-content">
            <h1>Welcome to my blog</h1>
            <Link className="welcome-link" to="/posts">Read Blogposts</Link>
        </div>
            
        </div>
    );
};

export default Welcome;
