import React from "react";
import {Jumbotron} from 'reactstrap';

function BookJumbotron({ children }) {
  return <Jumbotron className='mt-4'> {children}</Jumbotron>;
}

export default BookJumbotron;
