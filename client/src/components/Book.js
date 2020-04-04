import React from "react";
import {Row, Col , Button, } from 'reactstrap';
import { ListItem } from "./BookList";

function Book({ title, subtitle, authors, link, description, image, BookButton }) {
  return (
    <ListItem>
      <Row className="flex-wrap-reverse">
        <Col size="md-8">
          <h3 className="font-italic">{title}</h3>
          {subtitle && <h5 className="font-italic">{subtitle}</h5>}
        </Col>
        <Col md='4' sm='12'>
          <div className="btn-container">
          <Button color='light' target='_blank' rel='noopener noreferrer' href={link}>View</Button>
            <BookButton />
          </div>
        </Col>
      </Row>
      <Row>
        <Col md='6' sm='12'>
          <p className="font-italic small">Written by {authors}</p>
        </Col>
      </Row>
      <Row>
        <Col md='2' sm='4' xs='auto'>
          <img className="img-thumbnail img-fluid w-100" src={image} alt={title} />
        </Col>
        <Col md='10' sm='8' xs='auto'>
          <p>{description}</p>
        </Col>
      </Row>
    </ListItem>
  );
}

export default Book;
