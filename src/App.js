import React, {Component} from "react";
import {
  Button,
  Container,
  Row,
  Col,
  Media,
  Alert,
  Badge,
  Breadcrumb,
  ButtonGroup,
  ButtonToolbar,
  Card,
  Carousel,
  Dropdown,
  Form,
  InputGroup,
  FormControl,
  Image,
  Figure,
  Jumbotron,
  ListGroup,
  Modal,
  Nav,
  Navbar,
  OverlayTrigger,
  Popover,
  Pagination,
  ProgressBar,
  Table,
  Tabs,
  Tab,
  Collapse
} from "react-bootstrap";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {buka: false};
  }
  render() {
    const munculPopover = (
      <Popover>
        <Popover.Title>Informasi</Popover.Title>
        <Popover.Content>Selamat Kamu Berhasil</Popover.Content>
      </Popover>
    );
    return (
      <div>
        <Container>
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">Menu</Navbar.Brand>
            <Nav>
              <Nav.Item>
                <Nav.Link href="/">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/">Contact</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/">Info</Nav.Link>
              </Nav.Item>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Silahkan Cari" />
              <Button variant="outline-info">Search</Button>
            </Form>
          </Navbar>
          <br />
          <Breadcrumb>
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
              Library
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Data</Breadcrumb.Item>
          </Breadcrumb>
          <Alert variant="primary">Selamat Datang!</Alert>
          <br />
          <Nav>
            <Nav.Item>
              <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/">Contact</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/">Info</Nav.Link>
            </Nav.Item>
          </Nav>
          <br />
          <Tabs defaultActiveKey="Info">
            <Tab eventKey="Home" title="Home">
              <p>Contoh Halaman Home</p>
            </Tab>
            <Tab eventKey="Info" title="Info">
              <p>Contoh Halaman Info</p>
            </Tab>
          </Tabs>
          <br />
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/travel1.jpeg"
                alt="Travel 1"
              />
              <Carousel.Caption>
                <h3>Tiket Pesawat Murah 1</h3>
                <p>Dapatkan Promo Tiket Pesawat Murah 1</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/travel2.png"
                alt="Travel 2"
              />
              <Carousel.Caption>
                <h3>Tiket Pesawat Murah 2</h3>
                <p>Dapatkan Promo Tiket Pesawat Murah 2</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/travel3.jpeg"
                alt="Travel 3"
              />
              <Carousel.Caption>
                <h3>Tiket Pesawat Murah 3</h3>
                <p>Dapatkan Promo Tiket Pesawat Murah 3</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          <br />
          <Jumbotron>
            <h1>Hello Food</h1>
            <p>Selamat Datang Di Situs Makanan Nusantara</p>
            <Button variant="primary">Lebih Lengkap</Button>
          </Jumbotron>
          <br />
          <Row>
            <Col>
              <Media>
                <img
                  width={64}
                  height={64}
                  className="mr-3"
                  src="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png"
                  alt="Generic placeholder"
                />
                <Media.Body>
                  <h5>Media Heading</h5>
                  <p>Cras sit amet nibh libero, in gravida nulla.</p>
                </Media.Body>
              </Media>
            </Col>
            <Col xs={6}>
              <Media>
                <img
                  width={64}
                  height={64}
                  className="mr-3"
                  src="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png"
                  alt="Generic placeholder"
                />
                <Media.Body>
                  <h5>Media Heading</h5>
                  <p>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                    scelerisque ante sollicitudin commodo. Cras purus odio,
                    vestibulum in vulputate at, tempus viverra turpis. Fusce
                    condimentum nunc ac nisi vulputate fringilla. Donec lacinia
                    congue felis in faucibus.
                  </p>
                </Media.Body>
              </Media>
            </Col>
            <Col>
              <Media>
                <img
                  width={64}
                  height={64}
                  className="mr-3"
                  src="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png"
                  alt="Generic placeholder"
                />
                <Media.Body>
                  <h5>Media Heading</h5>
                  <p>Cras sit amet nibh libero, in gravida nulla.</p>
                </Media.Body>
              </Media>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button varian="primary">Testing</Button>
            </Col>
            <Col xs={5}>
              <Badge variant="secondary">Benar</Badge>

              <ButtonToolbar aria-label="Toolbar with button groups">
                <ButtonGroup className="mr-2" aria-label="First group">
                  <Button>1</Button>
                  <Button>2</Button>
                  <Button>3</Button>
                  <Button>4</Button>
                </ButtonGroup>

                <ButtonGroup className="mr-2" aria-label="Second group">
                  <Button>5</Button>
                  <Button>6</Button>
                  <Button>7</Button>
                </ButtonGroup>

                <ButtonGroup aria-label="Third group">
                  <Button>8</Button>
                </ButtonGroup>
              </ButtonToolbar>
            </Col>
            <Col>
              <Button varian="primary">
                Warning
                <Badge variant="secondary">1</Badge>
              </Button>
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              <Card style={{width: 300}}>
                <Card.Img
                  variant="top"
                  src="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png"
                />
                <Card.Body>
                  <Card.Text>
                    Sate adalah makanan khas indonesia yang mendunia
                  </Card.Text>
                  <Button variant="primary">Visit Indonesia</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Dropdown Button
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <br />
              <Form>
                <Form.Group>
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Masukkan Nama" />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Masukkan Email" />
                  <Form.Text className="text-muted">
                    Your email is safe
                  </Form.Text>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Masukkan Password"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Check type="checkbox" label="Kami setuju" />
                </Form.Group>
                <Button variant="success" type="submit">
                  Submit
                </Button>
              </Form>
            </Col>
            <Col>
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text>@</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl placeholder="Username" />
              </InputGroup>
              <Image
                src="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/foodsmall.jpg"
                roundedCircle
              />
              <br />
              <br />
              <Figure>
                <Figure.Image
                  width={170}
                  height={180}
                  alt="Nasi Padang"
                  src="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg"
                />
                <Figure.Caption>
                  Nasi Padang, Makanan Asli Khas Padang
                </Figure.Caption>
              </Figure>
            </Col>
          </Row>
          <br />
          <br />
          <Row>
            <Col>
              <ListGroup.Item active>Nasi Padang</ListGroup.Item>
              <ListGroup.Item>Sate Madura</ListGroup.Item>
              <ListGroup.Item>Ayam Geprek</ListGroup.Item>
              <ListGroup.Item>Bebek Panggang</ListGroup.Item>
            </Col>
            <Col>
              <Modal.Dialog>
                <Modal.Header closeButton>
                  <Modal.Title>Info</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <p>Simpan Data Pelanggan</p>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary">Close </Button>
                  <Button variant="primary">Save Change</Button>
                </Modal.Footer>
              </Modal.Dialog>
            </Col>
            <Col>
              <OverlayTrigger
                trigger="click"
                placement="right"
                overlay={munculPopover}
              >
                <Button variant="success">Munculkan Overlay</Button>
              </OverlayTrigger>
              <br />
              <br />
              <Pagination size="sm">
                <Pagination.Item active>1</Pagination.Item>
                <Pagination.Item>2</Pagination.Item>
                <Pagination.Item>3</Pagination.Item>
                <Pagination.Item>4</Pagination.Item>
                <Pagination.Item>5</Pagination.Item>
              </Pagination>
              <br />
              <br />
              <ProgressBar now={75} label="75%" />
            </Col>
          </Row>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>No</th>
                <th>Nama</th>
                <th>Menu</th>
                <th>Harga</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Dila</td>
                <td>Sate</td>
                <td>20.000</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Ardi</td>
                <td>Soto</td>
                <td>15.000</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Toni</td>
                <td>Nasi Padang</td>
                <td>15.000</td>
              </tr>
            </tbody>
          </Table>
          <Button
            variant="primary"
            onClick={() => this.setState({buka: !this.state.buka})}
          >
            Tampilkan
          </Button>
          <Collapse in={this.state.buka}>
            <p>Menampilkan sesuai permintaan</p>
          </Collapse>
        </Container>
        <br />
      </div>
    );
  }
}

export default App;
