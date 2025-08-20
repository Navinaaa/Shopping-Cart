import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBarTSX() {
  return (
    <Navbar sticky="top" expand="lg" className="bg-body-tertiary shadow-sm">
      <Container>
        {/* Left side: Logo */}
        <Navbar.Brand href="/" className="d-flex align-items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            viewBox="0 0 2048 2048"
          >
            {/* Paste your logo SVG content here */}
          </svg>
          <span className="ms-2 fw-bold">PRODUCE ROOM</span>
        </Navbar.Brand>

        {/* Collapsible Nav Links */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/shop">Store</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>

        <div className="d-flex align-items-center ms-auto">
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="me-2" />

          {/* Cart Button */}
           <Button variant="outline-primary" className="rounded-circle" href="/cart" style={{ width:"3rem", height: "3rem", position: "relative"}}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="30"
              viewBox="2 0 25 25"
              fill="outline-primary"
            >
              <path d="M7 4h-2l-1 2h16l-3 9h-10l-1-2h8l2-6h-12l-1-3zm0 14c-1.105 0-2 .895-2 2s.895 2 2 2c1.104 0 2-.895 2-2s-.896-2-2-2zm10 0c-1.105 0-2 .895-2 2s.895 2 2 2c1.104 0 2-.895 2-2s-.896-2-2-2z" />
            </svg>
            <div className="rounded-circle bg-danger d-flex justify-content-center align-items-center" 
            style={{ color: "white", width: "1.5rem", height:"1.5rem", position: "absolute", bottom: 0, right: 0, transform: "translate(25%, 25%)"}}>
                3
            </div>
          </Button>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavBarTSX;
