import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Navbar as Bnavbar } from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navbar() {
    return (
        <Bnavbar bg="light" expand="lg">
            <Container fluid>
                <Bnavbar.Brand href="#home">React-Test</Bnavbar.Brand>
                <Bnavbar.Toggle aria-controls="basic-navbar-nav" />
                <Bnavbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">About</Nav.Link>
                        <NavDropdown title="Extras" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#">Rate this test</NavDropdown.Item>
                            <NavDropdown.Item href="#">approve this test</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#">
                                Suggestion
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Bnavbar.Collapse>
            </Container>
        </Bnavbar>
    );
}

export default Navbar;