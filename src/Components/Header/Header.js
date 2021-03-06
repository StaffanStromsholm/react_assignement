import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faParagraph } from '@fortawesome/free-solid-svg-icons';



function Header({isLoggedIn, logoutHandler, loginHandler}) {
    return (
        <Navbar className="navbar" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand><Link to="/react_assignement"><FontAwesomeIcon icon={faParagraph} /></Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="/react_assignement/posts"><Link to="/react_assignement/posts">Blogposts</Link></Nav.Link>
                {/* Conditional rendering */}
                {isLoggedIn && <Nav.Link><Link to="/react_assignement/newpost">New Post</Link></Nav.Link>}
                {isLoggedIn && <Nav.Link><Link onClick={logoutHandler}>Logout</Link></Nav.Link>}
                {!isLoggedIn && <Nav.Link><Link onClick={loginHandler}>Login</Link></Nav.Link>}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;
