import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import 'bootstrap/dist/css/bootstrap.min.css';



function Header() {
    return (
        <Navbar className="navbar" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand><Link to="/posts">Blog</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link><Link to="/newpost">New Post</Link></Nav.Link>
                    {/* <Nav.Link href="#">Pricing</Nav.Link> */}
                    {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#">Separated link</NavDropdown.Item>
                    </NavDropdown> */}
                </Nav>
                <Nav>
                    <Nav.Link href="#">More deets</Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">
                        Dank memes
      </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header
