import React from "react"
import {BrowserRouter, Link, Route} from "react-router-dom"
import { Navbar, NavDropdown, Nav, Button } from "react-bootstrap"
import MainPage from "./MainPage"

const Navigation =()=>{
    return(
        <BrowserRouter>
            <Navbar expand="lg" className="sticky-top">
                <Navbar.Brand href="#home">Birthday App</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <NavDropdown title="Our courses" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Program Structure</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Courses</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Success Stories</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="About" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">About Us</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Blog</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Careers</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#home">Hire Our Graduates</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>


            <Route exact path="/" component={MainPage} />

        </BrowserRouter>

    )
}
export default Navigation