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
  const [textStats, setTextStats] = useState({
    fiveUsedWords: [],
    fiveLeastUsedWords: [],
    fiveUsedLetters: [],
    fiveLeastUsedLetters: [],
    longestWords: [],
    shortestWords: [],
  })

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
        const fiveUsedLetters = getWordsUsage(textValue, true, '')
        const fiveLeastUsedLetters = getWordsUsage(textValue, false, '')
        const longestWords = getLongestOrShortestWord(textValue, false)
        const shortestWords = getLongestOrShortestWord(textValue, true)

        setTextStats({ 
          fiveUsedWords, 
          fiveLeastUsedWords, 
          fiveUsedLetters,
          fiveLeastUsedLetters,
          longestWords,
          shortestWords,
        })
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
      <Row className='mb-5 pt-5'>
        <Col xs={12} sm={6} md={4} className="column mb-3">
          <h3>Top 5 used words</h3>
          
          <div>
            {textStats.fiveUsedWords.length === 0 &&  (
                  <ListGroup as="ol">
                    <ListGroup.Item as="li">
                      Nothing to analyse, please insert text
                    </ListGroup.Item>
                </ListGroup>
              )}

            <ListGroup as="ol" numbered>
              {textStats.fiveUsedWords.map((item) => {
                return (
                  <ListGroup.Item key={Math.random()} as="li">
                    Word "<b>{item.word}</b>" used <b>{item.count} times</b>
                  </ListGroup.Item>
                )})}
            </ListGroup>
          </div>
        </Col>
        <Col xs={12} sm={6} md={4} className="column mb-3">
          <h3>Top 5 least used words</h3>
          <div>
            {textStats.fiveLeastUsedWords.length === 0 &&  (
                <ListGroup as="ol">
                  <ListGroup.Item as="li">
                    Nothing to analyse, please insert text
                  </ListGroup.Item>
              </ListGroup>
            )}

            <ListGroup as="ol" numbered>
              {textStats.fiveLeastUsedWords.map((item) => {

                return (
                  <ListGroup.Item key={Math.random()} as="li">
                    Word "<b>{item.word}</b>" used <b>{item.count} times</b>
                  </ListGroup.Item>
                )})
              }
           </ListGroup>
          </div>
        </Col>
        <Col xs={12} sm={6} md={4} className="column mb-3">
          <h3>Top 5 longest words</h3>
          <div>
            {textStats.longestWords.length === 0 &&  (
                <ListGroup as="ol">
                  <ListGroup.Item as="li">
                    Nothing to analyse, please insert text
                  </ListGroup.Item>
              </ListGroup>
            )}

            <ListGroup as="ol" numbered>
              {textStats.longestWords.map((item) => {

                return (
                  <ListGroup.Item key={Math.random()} as="li">
                    <b>{item.word}</b>
                  </ListGroup.Item>
                )})
              }
            </ListGroup>
          </div>
        </Col>
        <Col xs={12} sm={6} md={4} className="column mb-3">
          <h3>Top 5 used letters</h3>
          <div>
            {textStats.fiveUsedLetters.length === 0 &&  (
                <ListGroup as="ol">
                  <ListGroup.Item as="li">
                    Nothing to analyse, please insert text
                  </ListGroup.Item>
              </ListGroup>
            )}
            <ListGroup as="ol" numbered>
              {textStats.fiveUsedLetters.map((item) => {

                return (
                  <ListGroup.Item key={Math.random()} as="li">
                    Letter "<b>{item.word}</b>" used <b>{item.count} times</b>
                  </ListGroup.Item>
                )})
              }
            </ListGroup>
          </div>
        </Col>
        <Col xs={12} sm={6} md={4} className="column mb-3">
          <h3>Top 5 least used letters</h3>
          <div>
            {textStats.fiveLeastUsedLetters.length === 0 &&  (
                <ListGroup as="ol">
                  <ListGroup.Item as="li">
                    Nothing to analyse, please insert text
                  </ListGroup.Item>
              </ListGroup>
            )}

            <ListGroup as="ol" numbered>
              {textStats.fiveLeastUsedLetters.map((item) => {

                return (
                  <ListGroup.Item key={Math.random()} as="li">
                    Letter "<b>{item.word}</b>" used <b>{item.count} times</b>
                  </ListGroup.Item>
                )})
              }
            </ListGroup>
          </div>
        </Col>
        <Col xs={12} sm={6} md={4} className="column mb-3">
          <h3>Top 5 shortest words</h3>
          <div>
            {textStats.shortestWords.length === 0 &&  (
                <ListGroup as="ol">
                  <ListGroup.Item as="li">
                    Nothing to analyse, please insert text
                  </ListGroup.Item>
              </ListGroup>
            )}

            <ListGroup as="ol" numbered>
              {textStats.shortestWords.map((item) => {

                return (
                  <ListGroup.Item key={Math.random()} as="li">
                    <b>{item.word}</b>
                  </ListGroup.Item>
                )})
              }
              </ListGroup>
            </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
