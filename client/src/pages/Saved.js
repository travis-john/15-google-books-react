import React, { Component } from "react";
import BookJumbotron from "../components/BookJumbotron";
import BookCard from "../components/BookCard";
import Book from "../components/Book";
import Footer from "../components/Footer";
import API from "../utils/API";
import {Col, Row, Container } from 'reactstrap';
import { List } from "../components/BookList";

class Saved extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    this.getSavedBooks();
  }

  getSavedBooks = () => {
    API.getSavedBooks()
      .then(res =>
        this.setState({
          books: res.data
        })
      )
      .catch(err => console.log(err));
  };

  handleBookDelete = id => {
    API.deleteBook(id).then(res => this.getSavedBooks());
  };

  render() {
    return (
      <Container>
        <Row>
          <Col md='12'>
            <BookJumbotron>
              <h1 className="text-center">
                <strong>Google Books Search</strong>
              </h1>
            </BookJumbotron>
          </Col>
        </Row>
        <Row>
          <Col md='12'>
            <BookCard title="Saved Books" icon="download">
              {this.state.books.length ? (
                <List>
                  {this.state.books.map(book => (
                    <Book
                      key={book._id}
                      title={book.title}
                      subtitle={book.subtitle}
                      link={book.link}
                      authors={book.authors.join(", ")}
                      description={book.description}
                      image={book.image}
                      Button={() => (
                        <button
                          onClick={() => this.handleBookDelete(book._id)}
                          className="btn btn-danger ml-2"
                        >
                          Delete
                        </button>
                      )}
                    />
                  ))}
                </List>
              ) : (
                <h2 className="text-center">No Saved Books</h2>
              )}
            </BookCard>
          </Col>
        </Row>
        <Footer />
      </Container>
    );
  }
}

export default Saved;
