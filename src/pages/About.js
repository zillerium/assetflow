import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';
import ReactPlayer from 'react-player'
import AssetFunctions from '../components/AssetFunctions.js'
const About = () => {



  return (
    <div >

<Container className="mt-5">
      <div >
	  <h1>About Us</h1>
	  <Row>
	  <Col></Col>
	  <Col>
	      <AssetFunctions />
          </Col>
	  <Col></Col>
	  </Row>
	  <Row>
	  <Col></Col>
	  <Col className="d-flex justify-content-center">
	  <ReactPlayer url="https://www.youtube.com/watch?v=yCgw6yxargc" />

	  </Col>

	  <Col></Col>


	  </Row>

      </div>
	  </Container>
    </div>
  );
}

export default About;
