import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Nav, Container, Table, Button, ButtonGroup, Row, Col, Card } from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Sleepmate</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#process">Process</Nav.Link>
              <Nav.Link href="#team">Team</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className='d-flex flex-column align-items-center' style={{ marginTop: 200 }}>
        <h1 className="text-center fw-bold mb-3">Sleepmate</h1>
        <h3 className="text-center mb-5">Telling your friends to shut up</h3>
        <Button variant="dark" size="lg">Explore</Button>
      </Container>

      <Container className='d-flex flex-column align-items-center' style={{ marginTop: 200 }}>
        <h1 className="text-center fw-bold mb-3">Features</h1>
        <Row xs={1} md={2} lg={3} className="g-4 mb-5">
          <Col>
            <Card>
              <Card.Img variant="top" src={require("./images/pic-2.jpg")} />
              <Card.Body>
                <Card.Title>Feature One</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={require("./images/pic-2.jpg")} />
              <Card.Body>
                <Card.Title>Feature Two</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={require("./images/pic-2.jpg")} />
              <Card.Body>
                <Card.Title>Feature Three</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <ButtonGroup>
          <Button variant="dark" size="lg">Concept Video</Button>
          <Button variant="outline-dark" size="lg">Mid-Fi Prototype</Button>
        </ButtonGroup>
      </Container>

      <Container className='d-flex flex-column align-items-center' style={{ marginTop: 200 }}>
        <h1 className="text-center fw-bold mb-3">Design Process</h1>
        <Table striped hover>
          <tbody>
            <tr>
              <td colSpan={2}>Needfinding Presentation</td>
              <td>PDF</td>
              <td>PPT</td>
            </tr>
            <tr>
              <td colSpan={2}>POV Presentation</td>
              <td>PDF</td>
              <td>PPT</td>
            </tr>
            <tr>
              <td colSpan={2}>Concept Video</td>
              <td>PDF</td>
              <td>PPT</td>
            </tr>
            <tr>
              <td colSpan={2}>Lo-Fi Prototype Presentation</td>
              <td>PDF</td>
              <td>PPT</td>
            </tr>
            <tr>
              <td colSpan={2}>Lo-Fi Prototype Report</td>
              <td>PDF</td>
              <td>PPT</td>
            </tr>
          </tbody>
        </Table>
      </Container>

      <Container className='d-flex flex-column align-items-center' style={{ marginTop: 200 }}>
        <h1 className="text-center fw-bold mb-5">Try It Out</h1>
        <ButtonGroup>
          <Button variant="dark" size="lg">Hi-Fi Prototype</Button>
          <Button variant="outline-dark" size="lg">Demo</Button>
        </ButtonGroup>
      </Container>

      <Container className='d-flex flex-column align-items-center' style={{ marginTop: 200, marginBottom: 200 }}>
        <h1 className="text-center fw-bold mb-3">The Sleepmate Team</h1>
        <Row xs={1} md={2} lg={4} className="g-4 mb-5">
          <Col>
            <Card>
              <Card.Img variant="top" src={require("./images/pic-2.jpg")} />
              <Card.Body>
                <Card.Title>Aaron Han</Card.Title>
                <Card.Text>
                  Place info here
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={require("./images/pic-2.jpg")} />
              <Card.Body>
                <Card.Title>Derek Chung</Card.Title>
                <Card.Text>
                  Place info here
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={require("./images/pic-2.jpg")} />
              <Card.Body>
                <Card.Title>Michelle Xu</Card.Title>
                <Card.Text>
                  Place info here
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={require("./images/pic-2.jpg")} />
              <Card.Body>
                <Card.Title>Tristan Wang</Card.Title>
                <Card.Text>
                  Place info here
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <div className="p-3 bg-dark text-white text-center">Sleepmate © 2022</div>
    </div>
  )
}

export default App
