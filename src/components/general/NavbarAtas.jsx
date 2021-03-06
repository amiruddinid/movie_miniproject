import React from 'react'
import { Navbar ,Nav ,Form ,FormControl} from "react-bootstrap";
export default function NavbarAtas() {
    return (
        <div>
           <Navbar bg="transparant" variant="dark" expand="lg">
                <Navbar.Brand href="#home">Icon</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    </Nav>
                    <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2 text-center" />
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                    </Form>
                </Navbar.Collapse>
                </Navbar> 
        </div>
    )
}
