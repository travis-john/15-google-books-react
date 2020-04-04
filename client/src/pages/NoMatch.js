import React from "react";
import {Col, Row, Container} from 'reactstrap';
import BookJumbotron from "../components/BookJumbotron";

function NoMatch() {
  return (
    <Container>
      <Row>
        <Col md='12'>
          <BookJumbotron>
            <h1 className="text-center">404 Page Not Found</h1>
            <h1 className="text-center">
              <span role="img" aria-label="Face With Rolling Eyes Emoji">
                🙄
              </span>
            </h1>
          </BookJumbotron>
        </Col>
      </Row>
    </Container>
  );
}

export default NoMatch;
