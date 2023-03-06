import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {


  return (
    <Container>
      <Row>
        <Col xs={12}>
          <h1 className='mt-3 mb-3'>Text analyser!</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group className="mb-3" controlId="textToAnalyse">
            <Form.Label>Text to analyse</Form.Label>
            <Form.Control 
              as="textarea" 
              rows={10}
              placeholder="Lorem ipsum dolor sit atmet..."
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className='mb-5'>
        <Col className="text-end">
          <Button variant="info">
            Analyse text
          </Button>
        </Col>
      </Row>
      <Row className='mb-3 pt-5'>
        <Col xs={4}>
          <h3>Top 5 used words</h3>
          <ListGroup as="ol" numbered>
            <ListGroup.Item as="li">word</ListGroup.Item>
            <ListGroup.Item as="li">word</ListGroup.Item>
            <ListGroup.Item as="li">word</ListGroup.Item>
            <ListGroup.Item as="li">word</ListGroup.Item>
            <ListGroup.Item as="li">word</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col xs={4}>
          <h3>Top 5 least used words</h3>
          <ListGroup as="ol" numbered>
            <ListGroup.Item as="li">word</ListGroup.Item>
            <ListGroup.Item as="li">word</ListGroup.Item>
            <ListGroup.Item as="li">word</ListGroup.Item>
            <ListGroup.Item as="li">word</ListGroup.Item>
            <ListGroup.Item as="li">word</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col xs={4}>
          <h3>Longest used word</h3>
          <h5 className='text-success'>
            kautkadgarshvaards
          </h5>
        </Col>
      </Row>
      <Row className='mb-3'>
        <Col xs={4}>
          <h3>Top 5 used letters</h3>
          <ListGroup as="ol" numbered>
            <ListGroup.Item as="li">word</ListGroup.Item>
            <ListGroup.Item as="li">word</ListGroup.Item>
            <ListGroup.Item as="li">word</ListGroup.Item>
            <ListGroup.Item as="li">word</ListGroup.Item>
            <ListGroup.Item as="li">word</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col xs={4}>
          <h3>Top 5 least used letters</h3>
          <ListGroup as="ol" numbered>
            <ListGroup.Item as="li">word</ListGroup.Item>
            <ListGroup.Item as="li">word</ListGroup.Item>
            <ListGroup.Item as="li">word</ListGroup.Item>
            <ListGroup.Item as="li">word</ListGroup.Item>
            <ListGroup.Item as="li">word</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col xs={4}>
          <h3>shortest used word</h3>
          <h5 className='text-danger'>if</h5>
        </Col>
      </Row>
    </Container>
  );
}

// top 5 used words
// top 5 least used words
// top 5 used letters
// top 5 least used letters
// longest word/-s
// shortest word/-s

export default App;
