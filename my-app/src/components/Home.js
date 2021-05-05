import { Carousel, Container } from "react-bootstrap";
import "./css/Customs.css";
import { Button } from "react-bootstrap";
import { Card, CardGroup, CardColumns } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Col } from "react-bootstrap";
// import { Container } from 'react-bootstrap';
import { Row } from "react-bootstrap";
import { MDBContainer } from "mdbreact";

function Home() {
  return (
    <div className="Home" id="ThemeBG">
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            width="800px"
            height="750px"
            className="d-block w-100"
            src={"img/img7.jpg?text=First slide&bg=282c34"}
            alt="First slide"
          />
          <Nav.Link href="https://www.nginx.com/">
            <Carousel.Caption>
              <h3>Nginx</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Nav.Link>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            width="800px"
            height="750px"
            className="d-block w-100"
            src="img/img6.jpg?text=Second slide&bg=282c34"
            alt="Second slide"
          />
          <Nav.Link href="https://www.docker.com/">
            <Carousel.Caption>
              <h3>Docker</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Nav.Link>
        </Carousel.Item>
        <Carousel.Item>
          <img
            width="800px"
            height="750px"
            className="d-block w-100"
            src="img/img5.jpeg?text=Third slide&bg=20232a"
            alt="Third slide"
          />
          <Nav.Link href="https://kubernetes.io/">
            <Carousel.Caption>
              <h3>Kubernetes</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Nav.Link>
        </Carousel.Item>
      </Carousel>
      <div class="ThemeBG">
        <form action="">
          <Row>
            <Col>
              {" "}
              <div>
                <Card
                  bg= "dark"
                  text= "light"
                >
                  <Card.Body>
                    <Card.Title>News</Card.Title>
                    <CardColumns>
                      <Card text= "dark">
                        <Card.Img variant="top" src="img/Cardimages.jpg" />
                        <Card.Body>
                          <Card.Title>Web Development</Card.Title>
                          <Card.Text>
                            This is a wider card with supporting text below as a
                            natural lead-in to additional content. This content
                            is a little bit longer.
                          </Card.Text>
                        </Card.Body>
                      </Card>
                      <Card text= "dark">
                        <Card.Img variant="top" src="img/Cardimages2.jpg" />
                        <Card.Body>
                          <Card.Title>Java Programing</Card.Title>
                          <Card.Text>
                            This card has supporting text below as a natural
                            lead-in to additional content.{" "}
                          </Card.Text>
                        </Card.Body>
                      </Card>
                      <Card text= "dark">
                        <Card.Img variant="top" src="img/Cardimages3.jpg" />
                        <Card.Body>
                          <Card.Title>Software Developer</Card.Title>
                          <Card.Text>
                            This is a wider card with supporting text below as a
                            natural lead-in to additional content. This card has
                            even longer content than the first to show that
                            equal height action.
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </CardColumns>
                    <p />
                    <Card.Title>Vedio</Card.Title>
                    <MDBContainer>
                      <div className="embed-responsive embed-responsive-16by9">
                        <iframe
                          className="embed-responsive-item"
                          src="https://www.youtube.com/embed/tEPB7uzKuh4"
                          allowfullscreen
                          // use after watch?v=
                        ></iframe>
                      </div>
                    </MDBContainer>
                    <Button variant="primary" href="https://www.youtube.com">
                      Open Youtube
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
        </form>
      </div>
    </div>
  );
}

export default Home;
