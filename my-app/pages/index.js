/*********************************************************************************
* BTI425 – Assignment 4
*
* I declare that this assignment is my own work in accordance with Seneca's
* Academic Integrity Policy:
* 
* https://www.senecapolytechnic.ca/about/policies/academic-integrity-policy.html
* 
* Name: _Kanwar Preet Kaur_ Student ID: _165575218_ Date: _08-03-2024_
*
********************************************************************************/
import { Image, Container, Row, Col } from 'react-bootstrap';

const MetropolitanMuseum = () => {
  return (
    <Container>
      <Image
        fluid
        rounded
        src="https://upload.wikimedia.org/wikipedia/commons/3/30/Metropolitan_Museum_of_Art_%28The_Met%29_-_Central_Park%2C_NYC.jpg"
        alt="Metropolitan Museum of Art"
      />
      <Row>
        <Col md={6}>
          <p>
            The Metropolitan Museum of Art of New York, colloquially "the Met", is the largest art museum in the United States. Its collection contains over two million works, divided among 17 curatorial departments. The main building, located on the eastern edge of Central Park along Manhattan's Museum Mile, is by area one of the world's largest art museums. A much smaller second location, The Cloisters at Fort Tryon Park in Upper Manhattan, contains an extensive collection of art, architecture, and artifacts from medieval Europe.
          </p>
          <p>
            The permanent collection consists of works of art from classical antiquity and ancient Egypt, paintings and sculptures from nearly all the European masters, and an extensive collection of American and modern art. The Met maintains extensive holdings of African, Asian, Oceanian, Byzantine, and Islamic art. The museum is home to encyclopedic collections of musical instruments, costumes, and accessories, as well as antique weapons and armor from around the world. Several notable interiors, ranging from 1st-century Rome through modern American design, are installed in its galleries.
          </p>
        </Col>
        <Col md={6}>
          <p>
            The Metropolitan Museum of Art was founded in 1870 for the purposes of opening a museum to bring art and art education to the American people. It opened on February 20, 1872, housed in a building located at 681 Fifth Avenue in New York City. Thomas P. Murphy, Sr., served as the museum's first president from 1870 to 1881.
          </p>
          <p>
            The museum's permanent collection consists of works of art from classical antiquity and ancient Egypt, paintings and sculptures from nearly all the European masters, and an extensive collection of American and modern art. The Met maintains extensive holdings of African, Asian, Oceanian, Byzantine, and Islamic art.
          </p>
        </Col>
      </Row>
      <p>
        <a href="https://en.wikipedia.org/wiki/Metropolitan_Museum_of_Art" target="_blank" rel="noreferrer">https://en.wikipedia.org/wiki/Metropolitan_Museum_of_Art</a>.
      </p>
    </Container>
  );
};

export default MetropolitanMuseum;