import React, {Component} from 'react';
import './css/MyNav.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Offcanvas, Button, Form, Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from "react-router-dom";

export default class MyNav extends Component {
    render() {

        const font = {
            marginLeft: "50px",
            color: "snow",

        }

        const expand = "md"

        return (
            <>
                <Navbar className={"justify-content-center TopNav"}>
                    <h4 className={"font-color letter"}>check out my github link!
                        <a href={"https://github.com/mushroom1324"}
                           style={{color: "black", paddingLeft: "10px"}}>go</a>
                    </h4>
                </Navbar>
                <Navbar key={expand} expand={expand} className="mb-3">
                    <Container fluid>
                        <Navbar.Brand style={{...font, fontSize: "25px"}}>
                            <Link style={{textDecoration: "none"}} className={"font-hover"} to={"/Main"}>PopcornOverflow</Link>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`}/>
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    Offcanvas
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                        <Link style={{textDecoration: "none", padding: "8px"}} className={"font-hover"} to={"/Post"}>Posts</Link>
                                        <Link style={{textDecoration: "none", padding: "8px"}} className={"font-hover"} to={"/Chat"}>Chat</Link>
                                    <NavDropdown
                                        title="Account"
                                        id={`offcanvasNavbarDropdown-expand-${expand}`}
                                    >
                                        <NavDropdown.Item href="#action3">My Profile</NavDropdown.Item>
                                        <NavDropdown.Item href="#action4">
                                            My Posts
                                        </NavDropdown.Item>
                                        <NavDropdown.Divider/>
                                        <NavDropdown.Item href="#action5">
                                            Log out
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                                <Form className="d-flex">
                                    <Form.Control
                                        type="search"
                                        placeholder="Search"
                                        className="me-2"
                                        aria-label="Search"
                                    />
                                    <Button style={{color: "snow", borderColor: "snow"}}
                                            variant="outline-secondary">Search</Button>
                                </Form>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            </>
        );
    }
}