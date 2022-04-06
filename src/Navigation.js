import { Navbar, Container, Nav, Button, Form, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    //fixed-top bg-dark
    <Navbar expand="lg" className="mb-4 navbar-dark sticky-nav bg-dark">
      <Container fluid>
        <Navbar.Brand href="#" className="text-white">SPACEX APP</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll"/>
        <Navbar.Collapse id="navbarScroll">

          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          <Link to="/" className="text-white custom">Home Page</Link>
          <Link to="/missions" className="text-white custom">Missions Listing</Link>

          </Nav>

          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button className="btn btn-success">Search</Button>
          </Form>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation;
