import React from "react"
import {Navbar, Nav,Container} from "react-bootstrap";
import Style from "./style"
const Header = () => {

    const Logout = () =>{
        localStorage.removeItem("beedUser");
        window.location.href = "/login"
    }
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                <Navbar.Brand href="/">Beed</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto w-100 justify-content-end">
                        <Nav.Link onClick={()=>Logout()}>Logout</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
            <Style/>
        </div>
    )
}


export default Header
