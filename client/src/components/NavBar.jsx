import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <Navbar expand="lg" id="mainNav">
            <Container className="px-4 px-lg-5">
                <Navbar.Brand href="#home" className="fs-2 text-white fw-semibold">Clean Blog</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-nav" />
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="ms-auto py-4 ly-lg-0">
                        <Link to={"/"} className="fs-lg text-white fw-semibold px-lg-3 py-3 py-lg-4 text-decoration-none">Home</Link>
                        <Link to={"/about"} className="fs-lg text-white fw-semibold px-lg-3 py-3 py-lg-4 text-decoration-none">About</Link>
                        <Link to={"/Login"} className="fs-lg text-white fw-semibold px-lg-3 py-3 py-lg-4 text-decoration-none">Login</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
}