import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

import {getWordsUsage, getLongestOrShortestWord} from './utils/textUtilities'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState } from 'react';

function App() {
  const [textValue, setTextValue] = useState('')

  return (
    <Container>
      <Row>
        <Col xs={12}>
          <h1 className='mt-3 mb-3'>
            Text analyser!
          </h1>
        </Col>
      </Row>
      <Form onSubmit={(eventObject) => {
        eventObject.preventDefault()

        const fiveUsedWords = getWordsUsage(textValue, true, ' ')
        const fiveLeastUsedWords = getWordsUsage(textValue, false, ' ')
        const fiveUsedLetter = getWordsUsage(textValue, true, '')
        const fiveLeastUsedLetter = getWordsUsage(textValue, false, '')
        const longestWords = getLongestOrShortestWord(textValue, false)
        const shortestWords = getLongestOrShortestWord(textValue, true)


        console.log('fiveUsedWords', fiveUsedWords)
        console.log('fiveLeastUsedWords', fiveLeastUsedWords)
        console.log('fiveLeastUsedLetter', fiveLeastUsedLetter)
        console.log('fiveUsedLetter', fiveUsedLetter)
        console.log('longestWords', longestWords)
        console.log('shortestWords', shortestWords)
      }}>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="textToAnalyse">
              <Form.Label>Text to analyse</Form.Label>
              <Form.Control 
                as="textarea" 
                rows={10}
                placeholder="Lorem ipsum dolor sit atmet..."
                required
                value={textValue}
                onChange={(e) => {
                  setTextValue(e.target.value)
                }}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className='mb-5'>
          <Col className="text-end">
            <Button type="submit" variant="info">
              Analyse text
            </Button>
          </Col>
        </Row>
      </Form>
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
          <h3>Top 5 longest words</h3>
          <ListGroup.Item as="li">word</ListGroup.Item>
            <ListGroup.Item as="li">word</ListGroup.Item>
            <ListGroup.Item as="li">word</ListGroup.Item>
            <ListGroup.Item as="li">word</ListGroup.Item>
            <ListGroup.Item as="li">word</ListGroup.Item>
            <ListGroup.Item as="li">word</ListGroup.Item>
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
          <h3>Top 5 shortest words</h3>
          <ListGroup.Item as="li">word</ListGroup.Item>
            <ListGroup.Item as="li">word</ListGroup.Item>
            <ListGroup.Item as="li">word</ListGroup.Item>
            <ListGroup.Item as="li">word</ListGroup.Item>
            <ListGroup.Item as="li">word</ListGroup.Item>
            <ListGroup.Item as="li">word</ListGroup.Item>
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
